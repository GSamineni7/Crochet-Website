const projects = [

    {
        image: "../Images/Gallery/Rocket.jpeg",
        title: "Amigurumi Rocket",
        description: "I made this amigurumi rocket from a crochet book. It was a fun project to make as a celebration of the Artemis II mission.",
        pattern: "https://www.amazon.com/Knot-Bad-Amigurumi-Techniques-Creatures/dp/0760376778"
    },

    {
        image: "../Images/Gallery/Dog.jpeg",
        title: "Amigurumi Dog",
        description: "I made this project twice, as a present for a friend and my cousin. This project is a great intro to the sewing that comes with amigurumi.",
        pattern: "https://www.youtube.com/watch?v=Qy7J7i5C-qo&t"
    },

    {
        image: "../Images/Gallery/Door-Hanging.jpeg",
        title: "Door Hanging",
        description: "A cute door hanging I made for my door. This is a great intro to crochet lace and is a cool decor object.",
        pattern: "https://www.youtube.com/watch?v=TqKHTqheM1I"
    },

    {
        image: "../Images/Gallery/Lab-Set.jpeg",
        title: "Lab Set",
        description: "My friend and I made this lab set as a present for our chemistry teacher. It is perfect for any chemistry lover!",
        pattern: "https://knotmonsters.com/products/18-crochet-chemistry-patterns-ebook-pdf-amigurumi-crochet-patterns-beginner-easy-simple-basic-yarn-chemistry-science-nerd-geek-book-bundle"
    },

    {
        image: "../Images/Gallery/Dragon.jpeg",
        title: "Dragon",
        description: "This project was made as part of a library camp. It can be long and has a lot of peices, but it is an interesting challenge.",
        pattern: "https://stringydingding.com/fantasy-dragon-amigurumi-free-crochet-pattern/"
    },

    {
        image: "../Images/Gallery/Bookmark.jpeg",
        title: "Bookmark",
        description: "A easy, functional yet stylish bookmark, it is a great last-minute gift and way to use up scrap yarn.",
        pattern: "https://www.youtube.com/watch?v=CbddqUT1slM&t=1s"
    },

    {
        image: "../Images/Gallery/Duck-Keychain.jpeg",
        title: "Duck Keychain",
        description: "Since our robotics mascot is a duck, I made this keychain for my teammate. It is a quick intro to amigurumi and can be customized as you wish.",
        pattern: "https://www.youtube.com/watch?v=PmeeYuM4f3c"
    },

    {
        image: "../Images/Gallery/Dino.jpeg",
        title: "Dino",
        description: "This dinosaur was made as a gift for a new-born baby. You can also add and eggshell covering if you wish!",
        pattern: "https://www.ravelry.com/patterns/library/baby-dinosaur-in-an-egg"
    },

    {
        image: "../Images/Gallery/Vine.jpeg",
        title: "Vine",
        description: "This is a vine decoration I made for my door. It is a great way to bring greenery into your home and is a simple project to make.",
        pattern: "https://www.youtube.com/watch?v=J_DhWyOryko&t=2s"
    },

    {
        image: "../Images/Gallery/Basket.jpeg",
        title: "Basket",
        description: "I made this basket as a catch-all. It is a great way to organize your space and is a simple project to make.",
        pattern: "https://www.youtube.com/watch?v=_e1Mk2yAWjg&t=2s"
    },

    {
        image: "../Images/Gallery/Snowflake.jpeg",
        title: "Snowflake",
        description: "A beautiful snowflake I made with a school club to decorate our school. It can also be used as a coaster or ornament.",
        pattern: "https://www.youtube.com/watch?v=VIhl9z9jtwk"
    },

    {
        image: "../Images/Gallery/Flower-Coaster.jpeg",
        title: "Flower Coaster",
        description: "Since 7th grade, I've been making one of these for every teacher. It is simple project but still very useful.",
        pattern: "https://www.youtube.com/watch?v=kzwwmMPRjbk&t=6s"
    },

    {
        image: "../Images/Gallery/Whale.JPG",
        title: "Whale",
        description: "This whale was made for my cousin. It is an easy way to learn the general pattern for spheres which are very common in amigurumi.",
        pattern: "https://www.youtube.com/watch?v=CxjnVeX9hv0"
    },

    {
        image: "../Images/Gallery/Curtain-Holder.jpeg",
        title: "Curtain Holder",
        description: "This curtain holder was made to hold my curtains open. It is a great way to tuck curtains in place without bunching.",
        pattern: "https://www.selinaveronique.com/crochet-romantic-hair-ribbon-free-pattern"
    },

];


let currentProject = 0;


function showProject() {

    const project = projects[currentProject];

    document.getElementById("gallery-image").src = project.image;
    document.getElementById("gallery-image").alt = project.title;

    document.getElementById("gallery-title").textContent = project.title;

    document.getElementById("gallery-description").textContent =
        project.description;

    document.getElementById("gallery-pattern").href =
        project.pattern;

    document.getElementById("gallery-counter").textContent =
        `${currentProject + 1} / ${projects.length}`;
}


function nextProject() {

    currentProject = currentProject + 1;

    if (currentProject === projects.length) {
        currentProject = 0;
    }

    showProject();
}


function previousProject() {

    currentProject = currentProject - 1;

    if (currentProject < 0) {
        currentProject = projects.length - 1;
    }

    showProject();
}