function countFreq(arr, n){ 
    let countobj=[];
    let visited = Array.from({length: n}, (_, i) => false);
    for (let i = 0; i < n; i++) {
        if (visited[i] === true)
            continue;
        let count = 1;
        for (let j = i + 1; j < n; j++) {
            if (arr[i] === arr[j]) {
                visited[j] = true;
                count++;
            }
        }
        countobj.push({
          item: arr[i],
          count: count,
      });
    }
    return countobj;
  }
  export default countFreq;