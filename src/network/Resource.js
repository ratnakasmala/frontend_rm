import Request from "./Request";
import URI from "../config/Uri"

class Resource {

  //Quick Leave
  async getTask() {
    const header = {
      "Authorization": "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJrYXJ5YXdhbiIsInN1YiI6MiwiaWF0IjoxNTYxOTE2NzI5LCJleHAiOjMxNzEzMTQzNjcyOX0.JfmOjuyl39_yDsDEj2DjW21Q1QKroxWvRQ3UU5xQnzI",
    }
    let res = await Request.get(URI.API_BASE_URL + URI.ENDPOINT_GET_TASK, header);

    return new Promise((resolve, reject) => {
      try {
        resolve(res.data)
      } catch (err) {
        reject("An error occurred")
      }
    });
  }

  //Quick Leave
  async createTask(body) {
    const header = {
      "Authorization": "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJrYXJ5YXdhbiIsInN1YiI6MiwiaWF0IjoxNTYxOTE2NzI5LCJleHAiOjMxNzEzMTQzNjcyOX0.JfmOjuyl39_yDsDEj2DjW21Q1QKroxWvRQ3UU5xQnzI",
      "Content-Type": "application/json",
    }

    console.log(JSON.stringify(body))

    let res = await Request.post(URI.API_BASE_URL + URI.ENDPOINT_CREATE_TASK, header, JSON.stringify(body));

    return new Promise((resolve, reject) => {
      try {
        resolve(res)
      } catch (err) {
        reject("An error occurred")
      }
    });
  }

  //Quick Leave
  async editTask(body, taskId) {
    const header = {
      "Authorization": "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJrYXJ5YXdhbiIsInN1YiI6MiwiaWF0IjoxNTYxOTE2NzI5LCJleHAiOjMxNzEzMTQzNjcyOX0.JfmOjuyl39_yDsDEj2DjW21Q1QKroxWvRQ3UU5xQnzI",
      "Content-Type": "application/json",
    }

    let endPoint = URI.API_BASE_URL + URI.ENDPOINT_EDIT_TASK.replace(/{(id)}/, taskId)
    let res = await Request.put(endPoint, header, JSON.stringify(body));

    return new Promise((resolve, reject) => {
      try {
        resolve(res)
      } catch (err) {
        reject("An error occurred")
      }
    });
  }

  //Quick Leave
  // async deteleTask(taskId){
  //   const header = {
  //     "Authorization": "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJrYXJ5YXdhbiIsInN1YiI6MiwiaWF0IjoxNTYxOTE2NzI5LCJleHAiOjMxNzEzMTQzNjcyOX0.JfmOjuyl39_yDsDEj2DjW21Q1QKroxWvRQ3UU5xQnzI",
  //     "Content-Type": "application/json",
  //   }

  //   let endPoint = URI.RESOURCE + URI.ENDPOINT_DELETE_TASK.replace(/{(taskId)}/, taskId)
  //   let res = await Request.delete(endPoint, header);

  //   return new Promise((resolve, reject) => {
  //     try{
  //       resolve(res)
  //     } catch (err) {
  //       reject("An error occurred")
  //     }
  //   });
  // }

  //Medical
  async getMedical() {
    const header = {
      "Authorization": "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJrYXJ5YXdhbiIsInN1YiI6MiwiaWF0IjoxNTYxOTE2NzI5LCJleHAiOjMxNzEzMTQzNjcyOX0.JfmOjuyl39_yDsDEj2DjW21Q1QKroxWvRQ3UU5xQnzI",
    }
    let res = await Request.get(URI.API_BASE_URL + URI.ENDPOINT_GET_Medical, header);

    return new Promise((resolve, reject) => {
      try {
        resolve(res.data)
      } catch (err) {
        reject("An error occurred")
      }
    });
  }

  //Medical
  async createMedical(body) {
    const header = {
      "Authorization": "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJrYXJ5YXdhbiIsInN1YiI6MiwiaWF0IjoxNTYxOTE2NzI5LCJleHAiOjMxNzEzMTQzNjcyOX0.JfmOjuyl39_yDsDEj2DjW21Q1QKroxWvRQ3UU5xQnzI",
      "Content-Type": "application/json",
    }

    console.log(JSON.stringify(body))

    let res = await Request.post(URI.API_BASE_URL + URI.ENDPOINT_CREATE_Medical, header, JSON.stringify(body));

    return new Promise((resolve, reject) => {
      try {
        resolve(res)
      } catch (err) {
        reject("An error occurred")
      }
    });
  }

  //Medical
  async editMedical(body, MedicalId) {
    const header = {
      "Authorization": "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJrYXJ5YXdhbiIsInN1YiI6MiwiaWF0IjoxNTYxOTE2NzI5LCJleHAiOjMxNzEzMTQzNjcyOX0.JfmOjuyl39_yDsDEj2DjW21Q1QKroxWvRQ3UU5xQnzI",
      "Content-Type": "application/json",
    }

    let endPoint = URI.API_BASE_URL + URI.ENDPOINT_EDIT_Medical.replace(/{(id)}/, MedicalId)
    let res = await Request.put(endPoint, header, JSON.stringify(body));

    return new Promise((resolve, reject) => {
      try {
        resolve(res)
      } catch (err) {
        reject("An error occurred")
      }
    });
  }

  //Medical
  // async deteleTask(taskId){
  //   const header = {
  //     "Authorization": "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJrYXJ5YXdhbiIsInN1YiI6MiwiaWF0IjoxNTYxOTE2NzI5LCJleHAiOjMxNzEzMTQzNjcyOX0.JfmOjuyl39_yDsDEj2DjW21Q1QKroxWvRQ3UU5xQnzI",
  //     "Content-Type": "application/json",
  //   }

  //   let endPoint = URI.RESOURCE + URI.ENDPOINT_DELETE_TASK.replace(/{(taskId)}/, taskId)
  //   let res = await Request.delete(endPoint, header);

  //   return new Promise((resolve, reject) => {
  //     try{
  //       resolve(res)
  //     } catch (err) {
  //       reject("An error occurred")
  //     }
  //   });
  // }

  // BusinessTrip
  async getBusinessTrip() {
    const header = {
      "Authorization": "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJrYXJ5YXdhbiIsInN1YiI6MiwiaWF0IjoxNTYxOTE2NzI5LCJleHAiOjMxNzEzMTQzNjcyOX0.JfmOjuyl39_yDsDEj2DjW21Q1QKroxWvRQ3UU5xQnzI",
    }
    let res = await Request.get(URI.API_BASE_URL + URI.ENDPOINT_GET_BusinessTrip, header);

    return new Promise((resolve, reject) => {
      try {
        resolve(res.data)
      } catch (err) {
        reject("An error occurred")
      }
    });
  }

  // BusinessTrip
  async createBusinessTrip(body) {
    const header = {
      "Authorization": "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJrYXJ5YXdhbiIsInN1YiI6MiwiaWF0IjoxNTYxOTE2NzI5LCJleHAiOjMxNzEzMTQzNjcyOX0.JfmOjuyl39_yDsDEj2DjW21Q1QKroxWvRQ3UU5xQnzI",
      "Content-Type": "application/json",
    }

    console.log(JSON.stringify(body))

    let res = await Request.post(URI.API_BASE_URL + URI.ENDPOINT_CREATE_BusinessTrip, header, JSON.stringify(body));

    return new Promise((resolve, reject) => {
      try {
        resolve(res)
      } catch (err) {
        reject("An error occurred")
      }
    });
  }

  // BusinessTrip
  async editBusinessTrip(body, BusinessTripId) {
    const header = {
      "Authorization": "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJrYXJ5YXdhbiIsInN1YiI6MiwiaWF0IjoxNTYxOTE2NzI5LCJleHAiOjMxNzEzMTQzNjcyOX0.JfmOjuyl39_yDsDEj2DjW21Q1QKroxWvRQ3UU5xQnzI",
      "Content-Type": "application/json",
    }

    let endPoint = URI.API_BASE_URL + URI.ENDPOINT_EDIT_BusinessTrip.replace(/{(id)}/, BusinessTripId)
    let res = await Request.put(endPoint, header, JSON.stringify(body));

    return new Promise((resolve, reject) => {
      try {
        resolve(res)
      } catch (err) {
        reject("An error occurred")
      }
    });
  }

  // // BusinessTrip
  // // async deteleTask(taskId){
  // //   const header = {
  // //     "Authorization": "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJrYXJ5YXdhbiIsInN1YiI6MiwiaWF0IjoxNTYxOTE2NzI5LCJleHAiOjMxNzEzMTQzNjcyOX0.JfmOjuyl39_yDsDEj2DjW21Q1QKroxWvRQ3UU5xQnzI",
  // //     "Content-Type": "application/json",
  // //   }

  // //   let endPoint = URI.RESOURCE + URI.ENDPOINT_DELETE_BusinessTrip.replace(/{(taskId)}/, taskId)
  // //   let res = await Request.delete(endPoint, header);

  // //   return new Promise((resolve, reject) => {
  // //     try{
  // //       resolve(res)
  // //     } catch (err) {
  // //       reject("An error occurred")
  // //     }
  // //   });
  // // }

  //Overtime
  async getOvertime() {
    const header = {
      "Authorization": "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJrYXJ5YXdhbiIsInN1YiI6MiwiaWF0IjoxNTYxOTE2NzI5LCJleHAiOjMxNzEzMTQzNjcyOX0.JfmOjuyl39_yDsDEj2DjW21Q1QKroxWvRQ3UU5xQnzI",
    }
    let res = await Request.get(URI.API_BASE_URL + URI.ENDPOINT_GET_Overtime, header);

    return new Promise((resolve, reject) => {
      try {
        resolve(res.data)
      } catch (err) {
        reject("An error occurred")
      }
    });
  }

  //Overtime
  async createOvertime(body) {
    const header = {
      "Authorization": "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJrYXJ5YXdhbiIsInN1YiI6MiwiaWF0IjoxNTYxOTE2NzI5LCJleHAiOjMxNzEzMTQzNjcyOX0.JfmOjuyl39_yDsDEj2DjW21Q1QKroxWvRQ3UU5xQnzI",
      "Content-Type": "application/json",
    }

    console.log(JSON.stringify(body))

    let res = await Request.post(URI.API_BASE_URL + URI.ENDPOINT_CREATE_Overtime, header, JSON.stringify(body));

    return new Promise((resolve, reject) => {
      try {
        resolve(res)
      } catch (err) {
        reject("An error occurred")
      }
    });
  }

  //Overtime
  async editTask(body, OvertimeId) {
    const header = {
      "Authorization": "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJrYXJ5YXdhbiIsInN1YiI6MiwiaWF0IjoxNTYxOTE2NzI5LCJleHAiOjMxNzEzMTQzNjcyOX0.JfmOjuyl39_yDsDEj2DjW21Q1QKroxWvRQ3UU5xQnzI",
      "Content-Type": "application/json",
    }

    let endPoint = URI.API_BASE_URL + URI.ENDPOINT_EDIT_Overtime.replace(/{(id)}/, OvertimeId)
    let res = await Request.put(endPoint, header, JSON.stringify(body));

    return new Promise((resolve, reject) => {
      try {
        resolve(res)
      } catch (err) {
        reject("An error occurred")
      }
    });
  }

  //Overtime
  // async deteleTask(taskId){
  //   const header = {
  //     "Authorization": "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJrYXJ5YXdhbiIsInN1YiI6MiwiaWF0IjoxNTYxOTE2NzI5LCJleHAiOjMxNzEzMTQzNjcyOX0.JfmOjuyl39_yDsDEj2DjW21Q1QKroxWvRQ3UU5xQnzI",
  //     "Content-Type": "application/json",
  //   }

  //   let endPoint = URI.RESOURCE + URI.ENDPOINT_DELETE_Overtime.replace(/{(taskId)}/, taskId)
  //   let res = await Request.delete(endPoint, header);

  //   return new Promise((resolve, reject) => {
  //     try{
  //       resolve(res)
  //     } catch (err) {
  //       reject("An error occurred")
  //     }
  //   });
  // }

}

export default new Resource();