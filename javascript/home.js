// here is the script for main slide show


let images = [
    "https://porter-website-banners.s3-ap-southeast-1.amazonaws.com/prod/home/all/desktop_2W_heroimage.jpg",
    "https://porter-website-banners.s3-ap-southeast-1.amazonaws.com/prod/home/all/outstation_webbanner.jpg",
    "https://porter-website-banners.s3-ap-southeast-1.amazonaws.com/prod/home/all/Helper_compressed.png",
    "https://porter-website-banners.s3-ap-southeast-1.amazonaws.com/prod/home/all/Helper_compressed.png"

];
     let cont = document.getElementById("slide");
    let interval;
    
    function slide() {
    
               let count = 0;
               let img = document.createElement("img");
               img.src = images[0];
    cont.append(img);
    count = count + 1;
    
    
      let interval = setInterval(function(){
    cont.innerHTML =  null;
    if (count == images.length) {
    count = 0;
    }
    
    let img = document.createElement("img");
    img.src = images[count];
    cont.append(img);
    
    count = count + 1;
    },3000)
    
    }
    
    slide();
    






let vehicle_boxes = document.querySelectorAll(".img_wrapper");


function changeVehicle() {
    for (let i = 0; i < vehicle_boxes.length; i++) {
        vehicle_boxes[i].onclick = function () {
            avi(i)
        }
    }
}

changeVehicle()

vehicle_ids = {
    0: "one",
    1: "two",
    2: "three",
    3: "four",
    4: "five",
    5: "six",
    6: "seven",
    7: "eight"
}

function avi(i) {
    uppendVehicle(i)
    let id = i.toString();
    id = vehicle_ids[id];

    let vehicle_img = document.getElementById(`${id}`);

    for (let i = 0; i < 7; i++) {
        let id = i.toString();
        id = vehicle_ids[id];

        let vehicle_img = document.getElementById(`${id}`);
        vehicle_img.style.backgroundPositionY = "top"
    }

    vehicle_img.style.backgroundPositionY = "bottom"
}



let left = -49.2;

let left_btn = document.getElementById("left_btn");

let right_btn = document.getElementById("right_btn")


function khisakLeft() {
    left_btn.style.display = "none";
    right_btn.style.display = "block"
    for (let box of vehicle_boxes) {
        box.style.transform = `translateX(0rem)`
    }
}
function khisakRight() {

    left_btn.style.display = "block";
    right_btn.style.display = "none"
    for (let box of vehicle_boxes) {
        box.style.transform = `translateX(${left}rem)`
    }
}





let rent_details = [
    {
        vehicle_img: "https://d3o1t8vp7n8wsg.cloudfront.net/assets/website_revamp/large_vehicles/tata_ace-e92a36b3508e6e3b1804fd2015adbfb6c948bc35afab36699440785ed83b5b24.png",
        heading: "TATA ACE",
        price: "₹210",
        distance: "1.0 km",
        time: "70 ",
        capacity: "750kg",
        size: "7ft x 4ft x 5ft"

    },
    {
        vehicle_img: "https://d3o1t8vp7n8wsg.cloudfront.net/assets/website_revamp/large_vehicles/tata_407-b968c07406c8b63fca431ef8ea2152caf5272b0013502a73d2390289f1138505.png",
        heading: "RENT TATA 407",
        price: "₹625",
        distance: "2.0 km",
        time: "120 ",
        capacity: "2500kg",
        size: "9ft x 5.5ft x 6ft"

    },
    {
        vehicle_img: "https://d3o1t8vp7n8wsg.cloudfront.net/assets/website_revamp/large_vehicles/3_wheeler-022fc2284832545607afeea8be6e567e0d2e99ff2e4e035e4f66374b22fa92db.png",
        heading: "RENT 3 WHEELER",
        price: "₹160",
        distance: "1.0 km",
        time: "50 ",
        capacity: "500kg",
        size: "5.5ft x 4.5ft x 5ft"

    },
    {
        vehicle_img: "https://d3o1t8vp7n8wsg.cloudfront.net/assets/website_revamp/large_vehicles/ace_helper-13b68258cbd75d2985ef458b6840d37c90735c3d50378dd07392ed6eb09073c9.png",
        heading: "RENT ACE (HELPER)",
        price: "₹210",
        distance: "1.0 km",
        time: "75 ",
        capacity: "750kg",
        size: "7ft x 4ft x 5ft"

    },
    {
        vehicle_img: "https://d3o1t8vp7n8wsg.cloudfront.net/assets/website_revamp/large_vehicles/3_wheeler_helper-51343864a9a26168e4bfc00ad299c33515cc01b793fc8b797c380aa46abf19c3.png",
        heading: "RENT 3 WHEELER (HELPER)",
        price: "₹160",
        distance: "1.0 km",
        time: "55 ",
        capacity: "500kg",
        size: "6ft x 5ft x 5ft"

    },
    {
        vehicle_img: "https://d3o1t8vp7n8wsg.cloudfront.net/assets/website_revamp/large_vehicles/8ft_1ton-a9abd7ed5e7104c62305c68c97527eac0ff7d40dd7808175d097546b57f901d7.png",
        heading: "RENT 8FT 1TON",
        price: "₹300",
        distance: "1.0 km",
        time: "90 ",
        capacity: "1000kg",
        size: "8ft x 4.5ft x 5.5ft"

    },
    {
        vehicle_img: "https://d3o1t8vp7n8wsg.cloudfront.net/assets/website_revamp/large_vehicles/tata_ace_closed-e92a36b3508e6e3b1804fd2015adbfb6c948bc35afab36699440785ed83b5b24.png",
        heading: "RENT 8FT PICKUP",
        price: "₹325",
        distance: "1.0 km",
        time: "70 ",
        capacity: "1250kg",
        size: "9ft x 5ft x 6ft"

    },
    {
        vehicle_img: "https://d3o1t8vp7n8wsg.cloudfront.net/assets/website_revamp/large_vehicles/2_wheeler-947e3c6aac74dcdd11fdd4059e4ee72132b276200dff063d6dff2c445f7aab5b.png",
        heading: "RENT 2 WHEELER",
        price: "₹40",
        distance: "1.0 km",
        time: "25 ",
        capacity: "20kg",
        size: "40cm x 40cm x 40cm"

    }
]




function uppendVehicle(id) {
    let vehicle_img_box = document.getElementById("vehicle_img_box");

    vehicle_img_box.innerHTML = null;

    let img = document.createElement("img");

    if( id == 2 || id == 4 || id ==7){
        img.style.width = "100%";
        img.style.height = '100%'
    }

    img.src = rent_details[id].vehicle_img;

    let rent_vehicle = document.getElementById("rent_vehicle");

    rent_vehicle.textContent = rent_details[id].heading;

    let rent_price = document.getElementById("rent_price");

    rent_price.textContent = rent_details[id].price;

    vehicle_img_box.append(img)


    let distace = document.getElementById("distance");

    distace.textContent = rent_details[id].distance;


    let time = document.getElementById("time");

    time.textContent = rent_details[id].time;

    let vehicle_capacity = document.getElementById("capacity");

    vehicle_capacity.textContent = rent_details[id].capacity;

    let vehicle_size = document.getElementById("size");

    vehicle_size.textContent = rent_details[id].size;

}

