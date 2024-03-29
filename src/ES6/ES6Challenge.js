class Element{
    constructor(name, buildYear) {
        this.name = name;
        this.buildYear = buildYear;
    }
}

class Park extends Element {
    constructor(name, buildYear, area, numTrees){
        super(name, buildYear);
        this.area = area;
        this.numTrees = numTrees;

    }

    treeDensity(){
        const desity= this.numTrees/this.area;
        console.log('${this.name} has a tree density of ${density} trees per square km.');

    }
}

class Street extends Element{
    constructor(name, buildYear, length, size=3){
        super(name, buildYear);
        this.length = length;
        this.size = size;
    }

    classifyStreet() {
        const classification = new Map();
        classification.set(1, 'tiny');
        classification.set(2, 'small');
        classification.set(3, 'nomal');
        classification.set(4, 'big');
        classification.set(5, 'huge');
        console.log('${this.name},build in $[this.buildYear}' +
    ', is a ${classification.get(this.size)} street');



}
}

const allParks = [new Park('Green Park', 1987, 0.2,214),
new Park('National Park', 1989, 2.9, 2531),
new Park('Oak Park', 1953, 0.4, 949)];

const allStreet = [new Street('Ocean', 1999,1.1,4),
new Street('green', 2008, 2.7,2),
new Street('4th strret', 2015,2.5,5)];

function calc(arr){
    const sum = arr.reduce((prev, cur, index) => prev + cur, 0);

    return[sum, sum / arr.length];

}

function reportParks(p){
    console.log('---Parks REPORTS---');
    //DENSITY
    p.forEach(el => el.treeDensity());
    //AVERAGE AGE
    const age = p.map(el => new Date().getFullYear() - el.buildYear);
    const[totalAge, aveAgec] = calc(ages);
    console.log('our ${p.length} parks have an average of ${avgAge} years.');
    //WHICH PARK HAS MORE THAN 1000 TREES
    const i = p.map(el => el.numTrees).findIndex(el => el>=1000);
    console.log('${p[i].name} has more than 1000 trees');

}

function reportStreets(s){
    console.log('---Streets REPORTS---');
    //tottal and average length of the town's
    const[totalLength, avgLength] = calc(s.map(el => el.length));
    console.log('out ${s.length} streets have a total length of ${totalLength}km ' +
        'with an average of ${avgLength} km');
    s.forEach(el => el.classifyStreet());

}

reportParks(allParks);
reportStreets(allStreet);