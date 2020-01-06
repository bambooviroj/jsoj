function diffArray(arr1, arr2) {
  const res = [];
  const setA = new Set(arr1)
  const setB = new Set(arr2)

  for(let ele of setA){
    if (!setB.has(ele)){
      res.push(ele)
    }    
  }

  for(let ele of setB){
    if (!setA.has(ele)){
      res.push(ele)
    }    
  }

  return res;
}

diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]);


function diffArray(arr1, arr2) {
  const res = []

  const pairArr = arr1.map(e => [e, 'A']).concat(
    arr2.map(e => [e, 'B'])
  )

  pairArr.sort(([v1, ], [v2, ]) => {
   return String(v1) > String(v2) ? 
      1 : 
      v1 == v2 ? 
        0 : 
        -1
  })

  if (0 === pairArr.length) {
    return []
  }

  // first
  let currV = pairArr[0][0]
  let currT = pairArr[0][1]
  let currCV = 1
  let currCT = 1

  for (let i = 1; i < pairArr.length; i++) {
    if(pairArr[i][0] === currV){
      if (pairArr[i][1] === currT) {
        currCT++
      } else {
        currCT = 1
      }
      currCV++
    } else {
      if (currCV === 1) {
        res.push(currV)
      } else if (currCV === currCT) {
        res.push(currV)
      }

      currV = pairArr[i][0]
      currCV = 1
      currCT = 1
    }
  }

  // last
  if (currCV === 1) {
      res.push(currV)
  } else if (currCV === currCT) {
      res.push(currV)
  }

  return res
}

diffArray([1, "calf", 3, "piglet"], [1, "calf", 3, 4]);