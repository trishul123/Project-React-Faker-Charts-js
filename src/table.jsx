
  function filtercarmakers(usersobject,switchnumber){
    let filterusers=[];
      usersobject.filter((item)=>{
        switch (switchnumber) {
          case 0:
            if(item.age>20&&item.age<=25)
            return item;
            break;
          case 1:
            if(item.age>25&&item.age<=30)
            return item;
            break;
          case 2:
            if(item.age>30&&item.age<=35)
            return item;
            break;
          case 3:
            if(item.age>35&&item.age<=40)
            return item;
            break;
          case 4:
            if(item.age>40&&item.age<=45)
            return item;
            break;
          case 5:
            if(item.age>45&&item.age<=50)
            return item;
            break;
          case 6:
            if(item.age>50&&item.age<=55)
            return item;
            break;
          case 7:
            if(item.age>55&&item.age<=60)
            return item;
            break;
          case 8:
            if(item.age>60&&item.age<=65)
            return item;
            break;  
          
          
        }
        
        
      })
      .map(item=>{
        filterusers.push(
          item
      );  
      })
      return filterusers;
      }
      
  function Tabledata({usersobject,constusersobject,setUserObject}){
    console.log('imported userobject to table.jsx',usersobject)
    
    const handleChange = (event) => {
      setUserObject(filtercarmakers(constusersobject,parseInt(event.target.value)))
    }
    return(
      <div>
          <select id="ageselect" onChange={handleChange} label="Select User Age">
            <option value="0">Select Option</option>
            <option value="0">20 to 25</option>
            <option value="1">25 to 30</option>
            <option value="2">30 to 35</option>
            <option value="3">35 to 40</option>
            <option value="4">40 to 45</option>
            <option value="5">45 to 50</option>
            <option value="6">50 to 55</option>
            <option value="7">55 to 60</option>
            <option value="8">60 to 65</option>
          </select>
      </div>
      );
    }
    export default Tabledata;