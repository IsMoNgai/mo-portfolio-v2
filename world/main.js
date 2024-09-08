
// interface setup
const carCanvas=document.getElementById("carCanvas");
carCanvas.width=930;

carCanvas.height=window.innerHeight;

const carCtx = carCanvas.getContext("2d");

const viewport = new Viewport(carCanvas, world.zoom, world.offset);


//training amount
const maxSpeed = 3;
const N = 10;
const geneticValue = 1;
const cars = generateCars(N);
let bestCar = cars[0];

const hardcodedBrainData = {
    "levels": [
        {
            "inputs": [0.4506697086777014, 0, 0, 0.3559188589086042, 0.548074461389779],
            "outputs": [0.6352044807526437, 0, 0, 0, 0, 0.632857725394856],
            "biases": [-0.556917874987583, -0.6731662474453071, 0.52411910267265, -0.18877510500240136, 0.7752749335763516, -0.9084112510572545],
            "weights": [
                [-0.21440645354277577, -0.9663046644762321, -0.5967737168374999, -0.8816463832380259, 0.27906255478847863, -0.6621235204972967],
                [-0.3816712254654289, -0.5166529741371507, 0.17260513335254385, 0.5035122771294908, -0.43360857361389593, -0.14053759231896168],
                [0.8096746987337259, 0.37401498192288496, -0.08768668587179129, 0.4878237232700157, -0.3224616105884889, 0.6798417676257934],
                [-0.3317155590006221, -0.34686283065344203, -0.07799254865562111, -0.07900090663776377, 0.23152099842212637, 0.9153874500153323],
                [0.5345567867194868, -0.32501493028536593, -0.19056903640616543, 0.27706276395588225, 0.2867262571596449, -0.5527682634066111]
            ]
        },
        {
            "inputs": [0.6352044807526437, 0, 0, 0, 0, 0.632857725394856],
            "outputs": [0.5368483943350216, 0, 0, 0],
            "biases": [0.13266543134514752, 0.9324772119919065, 0.5469407653482601, 0.12942916035384625],
            "weights": [
                [0.1268013580901144, 0.5746997570835117, -0.5898830402629268, 0.05722491744750691],
                [0.4453051570037812, 0.8632410226106823, -0.4783111958314304, 0.84772825885549],
                [-0.3475719870157459, -0.009850805299186333, -0.6972995746776673, 0.6891049061818361],
                [0.7434653216284559, 0.7508933756170391, -0.8512910526343821, 0.940534442289851],
                [0.42010767217860717, -0.5079892802697329, 0.5761899868662278, 0.30866007633130343],
                [0.930649988492019, 0.8872276779537501, -0.7681357973082492, -0.6145220218007046]
            ]
        }
    ]
};

if (hardcodedBrainData) {
    for (let i = 0; i < cars.length; i++) {
        cars[i].brain = hardcodedBrainData;
        if (i != 0) {
            // lower the value the more similar the cars' brain to other new gen AI
            // recommend initial = 10, fine tune = 0.05
            NerualNetwork.mutate(cars[i].brain, geneticValue);
        }
    }
}


// initializaing the road borders and traffic
const traffic = [];
const roadBorders = world.roadBorders.map((s) => [s.p1, s.p2]);

animate();
function generateCars(N) {
    const startPoints = world.markings.filter((m) => m instanceof Start);
    const cars = [];

    if (startPoints.length > 0) {
        // Loop through each start point
        for (const startPoint of startPoints) {
            const dir = startPoint.directionVector;
            const startAngle = -angle(dir) + Math.PI / 2;

            // Generate N cars at each start point
            for (let i = 1; i <= N; i++) {
                cars.push(new Car(startPoint.center.x, startPoint.center.y, 30, 50, "AI", startAngle, maxSpeed));
            }
        }
    } else {
        // Fallback to a default start point if no startPoints are found
        const defaultPoint = new Point(100, 100);
        const dir = new Point(0, -1);
        const startAngle = -angle(dir) + Math.PI / 2;

        // Generate N cars at the default start point
        for (let i = 1; i <= N; i++) {
            cars.push(new Car(defaultPoint.x, defaultPoint.y, 30, 50, "AI", startAngle, maxSpeed));
        }
    }

    return cars;
}

function animate(time) {
    carPOV = false;
  
    for(let i = 0; i < traffic.length; i++) {
        // we dont want traffic to get damage so 2nd arg is []
        traffic[i].update(roadBorders, []);
    } 
    for(let i = 0; i < cars.length; i++) {
        cars[i].update(roadBorders, traffic);
    }
    for(let i = 0; i < traffic.length; i++) {
        traffic[i].draw(carCtx, "green");
    }

    // FITNESS FUCTION:
    bestCar = cars.find(
        c=>c.fittness == Math.max(...cars.map(c=>c.fittness))
    );
 
    world.cars = cars;
    world.bestCar = bestCar;

    // making the viewpoint base on the best car
    // can make a bool to control this later
    if(carPOV) {
        viewport.offset.x = -bestCar.x;
        viewport.offset.y = -bestCar.y;
        viewport.reset();
        const viewPoint = scale(viewport.getOffset(), -1);
        world.draw(carCtx, viewPoint, false);
    } else {
        viewport.offset.x = 250;
        viewport.offset.y = 300;
        viewport.reset();
        const viewPoint = scale(viewport.getOffset(), -1);
        world.draw(carCtx, viewPoint, false);
    }

    // car rendering
    carCtx.globalAlpha=0.2;
    for(let i = 0; i < cars.length; i++) {
        cars[i].draw(carCtx, "black");
    }
    carCtx.globalAlpha=1;
    bestCar.draw(carCtx, "black", true);
    carCtx.restore();
    
    // visualizing the NN
    requestAnimationFrame(animate);
}