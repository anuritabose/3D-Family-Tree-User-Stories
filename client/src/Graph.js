class PersonNode {
    constructor(name) {
      this.name = name;
      this.listmembers = [];
      this.relation = [];
      this.count = 0;
    }
  
    addMember(member, relation) {
      this.listmembers.push(member);
      this.relation.push(relation);
      this.count +=1;
    }
  }
  
  class Graph {
    constructor() {
      this.peopleNodes = [];
      this.edges = [];
    }
  
    addPersonNode(name) {
      this.peopleNodes.push(new PersonNode(name));
    }
  
    getPerson(name) {
      return this.peopleNodes.find(person => person.name === name);
    }
  
    addEdge(personName1, personName2, personRelation) {
      const person1 = this.getPerson(personName1);
      const person2 = this.getPerson(personName2);
      const personRelation2=2-personRelation;
      person1.addMember(person2, personRelation);
      person2.addMember(person1, personRelation2);
      this.edges.push(`${personName1},${personName2}-${personRelation}`);
      this.edges.push(`${personName2},${personName1}-${personRelation2}`);
    }
  
    //print() {
      //return this.peopleNodes.map(({ name, listmembers }) => {
        //return `${name} => ${listmembers.map(xname => `${name.name}`, ${relation.map(name=> `${name.name}`.join(' ')}`;
        //return `${name} => ${listmembers.map(name => `${name.name}, ${name.relation}`).join(' ')}`;
      //}).join('\n')
    //}
  
    print() {
      for(var i = 0; i < this.peopleNodes.length; i++){
        console.log(this.peopleNodes[i].name);
        for(var j = 0; j < this.peopleNodes[i].count; j++){
          console.log(this.peopleNodes[i].listmembers[j]);
          console.log(this.peopleNodes[i].relation[j]);
        }
      }
    }
  }
  const graph = new Graph(true);
  function insertYou() {
    var x = document.getElementById("nameyours").value;
    graph.addPersonNode(x);
  }
  function insertMember() {
    var y = document.getElementById("namemember").value;
    var x = document.getElementById("nameyours").value;
    var userRelation = document.getElementsByName("relationship");
    for (var i = 0, length = 3; i < length; i++) {
      if (userRelation[i].checked) {
          //var userInputRelation = document.getElementByName('output1').value;
          var userInputRelation = userRelation[i].value;
          break;
      }
    }
    graph.addPersonNode(y);
    graph.addEdge(x, y, userInputRelation);
  }
  /*
  function showMember() {
    console.log(graph.print());
    let text = '{"nodes" : [';
    for(let i = 0; i < graph.peopleNodes.length; i++){
      text += '{ id: "' + graph.peopleNodes[i].name + '" },';
    }
    text += '],}';
    console.log(text);
    var data = JSON.stringify(text);
    console.log(data);
  }
  
  var data = {
    "nodes" : [
      JSON.parse(graph.peopleNodes);
    ],
    "edges":[
      JSON.parse(graph.edges);
    ]
  };
  */
  