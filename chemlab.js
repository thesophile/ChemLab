
    function ShowResult() {
      var result =document.getElementById("resulthidden");

      if (result.style.display==="none") 
      {result.style.display = "block";}

      else 
      {result.style.display = "none";}
    
    }
  
  
  
      
      
      var added_water =false;
      var shaken      =false;
      var Concentrated =false;
      var Heated      =false;               
      var Cooled        =false;
      var Boiled      =false;
      
      var fillPortion = -20 ; 
      
      
       var addedNH4Cl = false;
       var addedNH4OH = false;
       var addedNH4CO3  =false;
      var Grp3Separated = false;
      
       var addedAceticAcid =false;
       var addedPotChromate =false;
   
  function water () {
    
    
    var filled = document.querySelector('.fill')
                
    var transform = 'translate(0,' + fillPortion +'px)';
    
  filled.style.WebkitTransform = transform;
  filled.style.backgroundColor = 'cyan';  
    
    fillPortion -=20;
    
   added_water =true;
    
  }
    
    
  
      
     function Reagentselected()
      {
    
        
        //Fill testtube 
       var filled = document.querySelector('.fill') ;
       var transform = 'translate(0,' + fillPortion +'px)';
       filled.style.WebkitTransform = transform;
       fillPortion -=20; 
        
      //Record which reagents are selected  
        
      if ( document.getElementById("NH4Cl").checked)
      {
      addedNH4Cl = true;
      }
        
      if  ( document.getElementById("NH4OH").checked)
      {
      addedNH4OH = true;
      }
      
      if  ( document.getElementById("NH4CO3").checked)
      {
      addedNH4CO3 = true;
      }  
        
      if  ( document.getElementById("Acetic").checked)
      {
      addedAceticAcid =true;
      }  
        
      if  ( document.getElementById("Chromate").checked)
      {
       addedPotChromate =true;
      }  
        
     /*pouring pottassium chromate*/
      if(document.getElementById("Chromate").checked)
         {
           var filled = document.querySelector('.fill')
           var box = document.getElementsByClassName("greyboxhidden");

           filled.style.backgroundColor = 'yellow'; 
           box[0].innerHTML = "Yellow precipitate is formed.";
         
         } 
         
         if(document.getElementById("Iodide").checked)
         {
           var filled = document.querySelector('.fill')
           var box = document.getElementsByClassName("greyboxhidden");

           filled.style.backgroundColor = 'yellow'; 
           box[0].innerHTML = "Yellow precipitate";
         
         }    
       
        
     /*Hide the division*/
    var x = document.getElementsByClassName("ReagentShowOptions");
  
     x[0].className="ReagentHideOptions";    
        
    }  
        
         
      
      
    function CationShowOptions() 
      {
    
  
     var x=document.getElementsByClassName("CationHideOptions");
        
        x[0].className="CationShowOptions";
     }
      
      
   function CationHideOptions() 
      {
      var x = document.getElementsByClassName("CationShowOptions");
  
  x[0].className="CationHideOptions";
        
     }  
      
      
      
      
   function ReagentShowOptions() 
      {
        
      var x = document.getElementsByClassName("ReagentHideOptions");
  
      x[0].className="ReagentShowOptions";
     
      }
      
 
      
      
      function cationselected()
      {
      const cation=document.getElementById("cation");
          if (cation.style.display="none"){cation.style.display="block"}
        
      }

      function TestTube1(){
      var btn1=document.getElementById("t1btn")
      var btn2=document.getElementById("t2btn")
      btn1.style.backgroundColor="ghostwhite"; 
      btn2.style.backgroundColor="white"; 

      
      }

      function TestTube2(){
      var btn1=document.getElementById("t1btn")
      var btn2=document.getElementById("t2btn")
      btn1.style.backgroundColor="white"; 
      btn2.style.backgroundColor="ghostwhite"; 
      
      var filled = document.querySelector('.fill');
      var transform = 'translate(0,' + -20 +'px)';
      filled.style.WebkitTransform = transform;
      filled.style.backgroundColor = 'cyan';  
      fillPortion =-40;

      }

      
      var rotation = 20 ;
  
         function shake()
        {
          shaken=true;
         var cation=document.getElementById("cation");
          if (cation.style.display="block"){cation.style.display="none"}
          x= document.getElementById("testtube");

          x.style.WebkitTransform = 'rotate(' +20+'deg)';
          

        }

      function changeshake()
      {
        rotation= -20;
        x= document.getElementById("testtube");
          x.style.WebkitTransform = 'rotate(' + rotation +'deg)';

       }

       function changeshake2()
      {
        rotation= 0;
        x= document.getElementById("testtube");
          x.style.WebkitTransform = 'rotate(' + rotation +'deg)';

       }
  
     function filtered()
   {
          /*decrease the water level*/
          
           var filled = document.querySelector('.fill') ;
           var transform = 'translate(0,' + -20 +'px)';
           filled.style.WebkitTransform = transform;
           fillPortion = -40;
      /*dissolve the cation*/
          var cation=document.getElementById("cation");
          if (cation.style.display="block"){cation.style.display="none"}
     
          
         
    /* Pb precipitation - white */  
     if(added_water===true 
        && document.getElementById("dil.HCl").checked 
        && shaken===true 
        && document.getElementById("Pb").checked
        && Boiled===false
       )
       
       
         {
            var filled = document.querySelector('.fill')
            filled.style.backgroundColor = 'white'; 

            var result = document.getElementById("resulthidden");
           
           var box = document.getElementsByClassName("greyboxhidden");
           
           box[0].innerHTML = "White precipitate";
           result.innerHTML = "Group 1 present" 

          }
          
    
   /* Cu precipitation - Black */         
     if(Boiled===true 
        && document.getElementById("H2S").checked 
        && document.getElementById("Cu").checked)
        {
           var filled = document.querySelector('.fill')
           filled.style.backgroundColor = 'Black';
           
          
          var box = document.getElementsByClassName("greyboxhidden");
           
           box[0].innerHTML = "Black precipitate";

           var result = document.getElementById("resulthidden");
           result.innerHTML = "Residue : Group 2 present <br> Black - Copper" 
        }   
          
   /* Bi precipitation - Brown */         
     if(Boiled===true && document.getElementById("H2S").checked && document.getElementById("Bi").checked)
        {
           var filled = document.querySelector('.fill')  
           filled.style.backgroundColor = 'Brown';
          
          var box = document.getElementsByClassName("greyboxhidden");
           
           box[0].innerHTML = "Brown precipitate";

           var result = document.getElementById("resulthidden");
           result.innerHTML = "Residue : Group 2 present <br> Brown - Bismuth" 
        }    
          
    /* Cd precipitation - Yellow */         
     if(Boiled===true && document.getElementById("H2S").checked && document.getElementById("Cd").checked)
        {
           var filled = document.querySelector('.fill')
           filled.style.backgroundColor = 'yellow';
          
          var box = document.getElementsByClassName("greyboxhidden");
           
           box[0].innerHTML = "Yellow precipitate";

           var result = document.getElementById("resulthidden");
           result.innerHTML = "Residue : Group 2 present <br> Yellow - Cadmium" 
        }     
     
     
     /* Fe  precipitation - Green */         
     if(   Boiled       ===true
        && Concentrated ===true
        && addedNH4Cl   ===true 
        && addedNH4OH   ===true
        && shaken       ===true
        && document.getElementById("Fe").checked )
        
        { 
          var filled = document.querySelector('.fill')
          filled.style.backgroundColor = 'green';
          
          var box = document.getElementsByClassName("greyboxhidden");
           
           box[0].innerHTML = "Green precipitate";

           var result = document.getElementById("resulthidden");
           result.innerHTML = "Residue : Group 3 present <br> Green - Fe or Cr" 
        }  
      /* Cr  precipitation - Green */ 
     if(   Boiled       ===true
        && Concentrated ===true
        && addedNH4Cl   ===true 
        && addedNH4OH   ===true
        && shaken       ===true
        && document.getElementById("Cr").checked )
        
        { 
          var filled = document.querySelector('.fill')
          filled.style.backgroundColor = 'green';
          
          var box = document.getElementsByClassName("greyboxhidden");
           
           box[0].innerHTML = "Green precipitate";

           var result = document.getElementById("resulthidden");
           result.innerHTML = "Residue : Group 3 present <br> Green - Fe or Cr" 
        }     
      /* Al  precipitation - White gelatinous */ 
     if(   Boiled       ===true
        && Concentrated ===true
        && addedNH4Cl   ===true 
        && addedNH4OH   ===true
        && shaken       ===true
        && document.getElementById("Al").checked )
        
        { 
          var filled = document.querySelector('.fill')
          filled.style.backgroundColor = 'white';
          
          var box = document.getElementsByClassName("greyboxhidden");
           
           box[0].innerHTML = "White gelatinous precipitate";

           var result = document.getElementById("resulthidden");
           result.innerHTML = "Residue : Group 3 present <br> White gelatinous - Al" 
        } 
     
     /*Mark if grp3separation has been done*/
     
     if(   Boiled       ===true
        && Concentrated ===true
        && addedNH4Cl   ===true 
        && addedNH4OH   ===true
        && shaken       ===true
         )
        
        { 
          Grp3Separated =true;
        } 
     
     /* Zn  precipitation - White */ 
     if( document.getElementById("Zn").checked 
         && Grp3Separated ===true
         && document.getElementById("H2S").checked  
        
         )
        
        { 
          var filled = document.querySelector('.fill')
          filled.style.backgroundColor = 'white';
          
          var box = document.getElementsByClassName("greyboxhidden");
           
           box[0].innerHTML = "White precipitate";

           var result = document.getElementById("resulthidden");
           result.innerHTML = "Residue : Group 4 present <br> White - Zn" 
        } 
     /* Mn precipitation - Flesh colour */ 
     if( document.getElementById("Mn").checked 
         && Grp3Separated ===true
         && document.getElementById("H2S").checked  
        
         )
        
        { 
          var filled = document.querySelector('.fill')
          filled.style.backgroundColor = '#D2A9A1';
          
          var box = document.getElementsByClassName("greyboxhidden");
           
           box[0].innerHTML = "Flesh colour precipitate";

           var result = document.getElementById("resulthidden");
           result.innerHTML = "Residue : Group 4 present <br> Flesh colour - Mn" 
        } 
     
     /* Grp 5 - White */ 
     if(  Boiled       ===true
        && Concentrated ===true
        && addedNH4Cl   ===true 
        && addedNH4OH   ===true
        && addedNH4CO3  ===true
        && Heated       ===true
        && Cooled       ===true
        && document.getElementById("Ba").checked   
        
         )
        
        { 
          var filled = document.querySelector('.fill')
          filled.style.backgroundColor = 'white';
          
          var box = document.getElementsByClassName("greyboxhidden");
           
           box[0].innerHTML = "White precipitate";

           var result = document.getElementById("resulthidden");
           result.innerHTML = "Residue : white - Group 5 present " 
        } 
     
     /*Group 1 analysis*/
     
     
     
     if(
        addedAceticAcid ===true
        && addedPotChromate ===true
        && document.getElementById("Pb").checked
        
       )
       
       
         {
            var filled = document.querySelector('.fill')
            filled.style.backgroundColor = 'yellow'; 
           
           var box = document.getElementsByClassName("greyboxhidden");
           
           box[0].innerHTML = "Yellow precipitate";
          }
     
      
  } 
          
          
           
           
      function Concentrate()  
      {Concentrated = true;

        /*decrease the water level*/      
        var filled = document.querySelector('.fill') ;
           var transform = 'translate(0,' + -20 +'px)';
           filled.style.WebkitTransform = transform;
           fillPortion = -40;
    
      }
      
      function Heat()  {
  
          Heated=true; 
  
          var x =document.getElementById("burner");
          if(x.style.display="none"){x.style.display="block"}
         
      }
  
      function StopHeat(){
                var x =document.getElementById("burner");
                if(x.style.display="block"){x.style.display="none"}
            }


  
      
      function Cool()
         { Cooled=true;
      }
      
      function Boil() { 
          Boiled=true;
         
          var x =document.getElementById("burner");
          if(x.style.display="none"){x.style.display="block"}
    
    
        }

        function StopBoil()
            {
                var x =document.getElementById("burner");
                if(x.style.display="block"){x.style.display="none"}
            } 
      
      function Divide(){
         var workbench =document.getElementById("workbench");
         var dividebuttons=document.getElementById("dividebuttons");
         
         workbench.style.backgroundColor="ghostwhite";
         if (dividebuttons.style.display="none"){dividebuttons.style.display="block"}

      }


 
