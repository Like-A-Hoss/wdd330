function useThis(){
    let user = {
        name: "John",
        age: 30,
      
        sayHi() {
          alert( this.name ); // fixed an error
        }
      
      };
      
      
      let admin = user;
      user = null; // overwrite to make things obvious
      
      admin.sayHi(); // TypeError: Cannot read property 'name' of null if sayHi still referenced user instead of this.  Awesome code modularity!
}