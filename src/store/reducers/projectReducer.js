const initState = {
    projects:[
         {id:'1',title:'dummy project',content:'this is the test dummy project'}, 
         {id:'2',title:'dummy project 2',content:'this is the test dummy project 2'}, 
         {id:'2',title:'dummy project 3',content:'this is the test dummy project 3'}, 

        ]
}
const projectReducer = (state = initState,action)=>{

    switch(action.type) {
        case 'CREATE_PROJECT':
            console.log('created project',action.project);
            return state;
        case 'CREATE_PROJECT_ERROR':
            console.log('create project error',action.err);
            return state;
        default:
            return state;
            
    }
  
}
export default projectReducer