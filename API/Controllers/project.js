import {v4 as uuidv4} from 'uuid';

let projects = [
    {
        "name": "Building 8",
        "id": 1,
        "meetingRooms": [
          {
            "name": "Punjab",
            "floor": 1,
            "id": 1,
            "meetings": [
              
            ]
          },
          {
            "name": "Ganga",
            "floor": 1,
            "id": 2,
            "meetings": [
            
            ]
          },
          {
            "name": "Yamuna",
            "floor": 2,
            "id": 1,
            "meetings": [
            
            ]
          },
          {
            "name": "Andhra",
            "floor": 3,
            "id": 1,
            "meetings": [
            
            ]
          }
        ]
    },
    {
    "name": "Building 4",
    "id": 2,
    "meetingRooms": [
      {
        "name": "Kerala",
        "floor": 1,
        "id": 1,
        "meetings": [
         
        ]
      },
      {
        "name": "Bihar",
        "floor": 2,
        "id": 2,
        "meetings": []
      }
    ]
    },
    {
    "name": "Building 6",
    "id": 3,
    "meetingRooms": [
      {
        "name": "Karnataka",
        "floor": 1,
        "id": 1,
        "meetings": [
          
        ]
      },
    ]
    }
];

export const getProjects =  (req,res) => {
    // console.log({projects})
    res.send(projects);
}

export const createProject = (req,res) => {
    const project = req.body;
    projects.push( { ...project, projectId:uuidv4()});
    res.send(`project added`);
}


export const getProject =  (req,res) => {
    const { id } = req.params;
    const foundProject = projects.find((project) => project.projectId == id)
    res.send(foundProject);
}

export const deleteProject = (req,res) => {
    const { projectId } = req.params;
    projects = projects.filter((project) => project.projectId != projectId)
    console.log("out",projects);
    res.send(`project ${projectId} deleted`);
}

export const updateProject =  (req,res) => {
    const { id } = req.params;
    const {roomId,title,date,startTime,endTime} = req.body
    const meet = {
      title : title,
      id:uuidv4(),
      date:date,
      startTime:startTime,
      endTime:endTime
    }
    const selectedBuilding = projects.find((item) =>  item.id == id); 
    const selectedRoom = selectedBuilding.meetingRooms.find((item) =>  item.id == roomId);                      
    
    selectedRoom && selectedRoom?.meetings?.push(meet)  
    // console.log(req.body,selectedRoom); 
    selectedBuilding.meetingRooms.map(room => (selectedRoom.id == room.id ) || room);              
    projects.map(building => (building.id == selectedBuilding.id ) || building);              
    console.log("IM",req.body,"IN",selectedBuilding); 

    // const {firstName, lastName, age} = req.body;
    // const user = projects.find((user) => user.id === id)
    // if(firstName)
    // {
    //     user.firstName = firstName;
    // }
    // if(lastName)
    // {
    //     user.lastName = lastName;
    // }
    // if(age)
    // {
    //     user.age = age;
    // }
    
    res.send(`building updated`);
}
