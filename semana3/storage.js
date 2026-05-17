

export function loadData() {
    const data  = JSON.parse(localStorage.getItem("task"));
    if (data === null) {
      return false
    } else {
      return data
    }
  }


export function onRemove() {
    localStorage.removeItem("task");
    location.reload()
  }

export function saveData(dataNew) {
    const dataOld= loadData()
    if (dataOld) {
      dataOld.push(dataNew)
      localStorage.setItem("task", JSON.stringify(dataOld));
    }else{
        localStorage.setItem("task", JSON.stringify([dataNew]));
    }
  }



