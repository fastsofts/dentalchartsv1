<template>
<div id="app">
    <v-app id="inspire">
        <v-container class="pa-2" fluid>  
          <v-row>
            <div class="cebuttons">
               <v-btn flat  @click="hideCard()" class="cebutton" :style="{'left':`${getLeft}px`}">
                   <CollapseLogo v-show="!collapse" alt="Collapse" class="collapsebutton"/>
                   <ExpandLogo v-show="collapse" alt="Expand" class="expandbutton" />
               </v-btn>
            </div>           
            <v-col class="item_left" cols="12" :style="{'height':`${getHeight}vh`}" :sm='`${getLayoutChangesmleft}`' :md='`${getLayoutChangemdleft}`'>
              <v-card class="pa-3 full">
                  <v-card-text>
                    <v-row v-show="!collapse">
                       <v-col class = "selected_text" cols="12" sm="3" md="3">
                          Selected
                       </v-col>   
                       <v-col cols="12" sm="9" md="9">
                          <v-text-field  density="compact" class = "selected"  variant="outlined"></v-text-field>
                       </v-col>   
                    </v-row>  
                    <v-row v-show="!collapse" class = "buttonsholder" >
                        <v-col cols = '3' sm='3' md='3'>
                           <v-btn flat>Edit</v-btn>
                        </v-col>
                        <v-col cols = '3' sm='3' md='3' class="ml-3">
                           <v-btn flat>Delete</v-btn>
                        </v-col>  
                        <v-col cols = '6' sm='6' md='6'>   
                        </v-col>                      
                    </v-row>      
                    <v-row v-show="!collapse" class = "tableholder">
                      <v-col cols  = '12' sm='12' md='12'>
                          <v-table
                           fixed-header
                           height="65vh"
                           width="100vw"
                           class="table"
                         >
                          <thead class='header'>
                            <tr>
                              <th class="text-center">
                              </th>
                              <th class="text-left heading">
                                  Status
                              </th>
                              <th class="text-left">
                                 Teeth No.
                              </th>
                              <th class="text-left">
                                 Surface
                              </th>      
                              <th class="text-left">
                                 Description
                              </th>                         
                            </tr>
                         </thead>
                         <tbody class='details'>
                           <tr v-for="teeth in teethdetails"
                                :key="teeth.number"
                             >
                               <td class="text-center"><v-row justify="space-around"><input class = "moveinput" type="checkbox" :checked= 'teeth.checked' @change="({ target: { checked }}) => teeth.selected = checked" ></v-row></td>
                               <td class="text-left">{{ teeth.status }}</td>
                               <td class="text-left">{{ teeth.number }}</td>
                               <td class="text-left">{{ teeth.surface?teeth.surface:'-' }}</td>
                               <td class="text-left">{{ teeth.description }}</td>
                           </tr>
                         </tbody>
                         <tfoot>
                            <tr>
                            </tr>
                         </tfoot>
                        </v-table>
                      </v-col> 
                    </v-row>
                  </v-card-text>                         
              </v-card>
            </v-col>
            <v-col class="item_right" cols="12"  :sm='`${getLayoutChangesm}`' :md='`${getLayoutChangemd}`'>
              <v-row class = "dentalchart">
                 <v-col class="item-right" cols="12" sm="12" md="12">
                    <v-card class="pa-3 full">
                      <v-row>
                        <v-col cols = '3' sm='3' md='3'>
                              <Datepicker
                                :full-month-name="true"
                                input-class="customClass"
                                placeholder="YYYY-MM-DD"
                               :typeable="true"
                               :hideInput="false"
                               class = "dateinput"
                               format="yyyy-MM-dd"
                               initial-view
                             >
                             </Datepicker>                             
                        </v-col>  
                        <v-col cols = '2' sm='2' md='2'  class = 'buttonsholderright ml-2'>
                             <v-btn flat>NEW CHART</v-btn>
                        </v-col>                              
                        <v-col cols = '2' sm='2' md='2' class = 'buttonsholderright ml-2'>
                             <v-btn flat>COPY</v-btn>
                        </v-col> 
                        <v-col cols = '2' sm='2' md='2' class = 'ml-2'>
                        </v-col>                             
                        <v-col cols = '2' sm='2' md='2' class = 'buttonsholderpng'>
                             <v-btn flat @click="generateImage('svgmain','svgchild')">GENERATE PNG</v-btn>
                        </v-col>                                                                                         
                      </v-row>
                      <v-row class = 'dentalholder'>
                          <v-col cols = '12' sm='12' md='12' class = "dentaldiagram">
                            <DentalChart />      
                          </v-col>
                      </v-row>                      
                    </v-card>
                 </v-col>
              </v-row>
              <v-row class = "dentalchart_details">
                 <v-col class="item-right" cols="12" sm="12" md="12">
                    <v-card class="pa-3 full">
                       <v-row>
                          <v-col cols='4' sm='4' md='4'>
                            <v-row>
                              <v-col cols='4' sm='4' md='4' class = 'category'>
                                 Category
                              </v-col>
                              <v-col cols='8' sm='8' md='8' class = 'categorydetails'>   
                                <div class="d-flex flex-column">
                                 <v-select
                                    label=""
                                    class = 'select'                                    
                                    density="compact"
                                    :items="categories" 
                                    v-model='selectedCategory'
                                    @update:modelValue="changeCategory"
                                    return-object
                                 >
                                 </v-select>  
                                </div>    
                              </v-col>
                            </v-row>                            
                          </v-col>
                          <v-col cols='4' sm='4' md='4'>
                           <v-row>
                              <v-col cols='4' sm='4' md='4' class = 'category'>
                                 Surface
                              </v-col>
                              <v-col cols='8' sm='8' md='8' class = 'categorydetails'>   
                                <div class="d-flex flex-column">
                                 <v-select
                                    label=""
                                    class = 'select'                                    
                                    density="compact"
                                    :items="surfaces" 
                                    item-disabled="disable"
                                    item-text="name"                                    
                                    v-model='selectedSurface'
                                    @update:modelValue="changeSurface"
                                    return-object
                                 >
                                 </v-select>  
                                </div>    
                              </v-col>
                            </v-row>                              
                          </v-col>     
                          <v-col cols='4' sm='4' md='4'>
                           <v-row>                          
                              <v-col cols='4' sm='4' md='4' class = 'category'>
                                 Circle
                              </v-col>
                              <v-col cols='8' sm='8' md='8' class = 'categorydetails'>   
                                <div class="d-flex flex-column">
                                 <v-select
                                    label="Radius"
                                    density="compact"
                                    :items="radiuses" class = 'select'
                                 >
                                 </v-select>  
                                </div>    
                              </v-col>
                            </v-row>                            
                          </v-col>                                                                        
                        </v-row>
                        <v-row class="moverow moverowlast">
                          <v-col cols='4' sm='4' md='4'>
                            <v-row class = 'moveupfirst'>
                              <v-col cols='4' sm='4' md='4' class = 'treatment'>
                                 Treatment
                              </v-col>
                              <v-col cols='4' sm='4' md='4' class = 'typeselection'>
                                  <v-switch
                                    v-model="typeselection"
                                    compact
                                    inset
                                    label=""
                                    value="treatment"
                                    hide-details
                                    class='typeselectionswitch'
                                    @update:modelValue="changeType"
                                  ></v-switch>
                              </v-col>
                              <v-col cols='${getsmallwidth}' sm='${getsmallwidth}' md='${getsmallwidth}' class = 'diagnosis'>
                                 Diagnosis
                              </v-col>                                                            
                            </v-row>
                          </v-col>
                          <v-col cols='4' sm='4' md='4'>
                            <v-row class = 'moveupsecond'>
                              <v-col cols='4' sm='4' md='4' class = 'category'>
                                 Material
                              </v-col>
                              <v-col cols='8' sm='8' md='8' class = 'categorydetails'>   
                                <div class="d-flex flex-column">
                                 <v-select
                                    label=""
                                    density="compact"
                                    :items="materials" 
                                    item-disabled="disable"
                                    item-text="name"
                                    class = 'select'
                                    v-model='selectedMaterial'
                                    @update:modelValue="changeMaterial"
                                    return-object
                                 >
                                 </v-select>  
                                </div>    
                              </v-col>                                                         
                            </v-row>
                          </v-col>
                          <v-col cols='4' sm='4' md='4'>
                            <v-row class = "moveup moveleft">
                              <v-col cols='4' sm='4' md='4'>                            
                                 <div class="text-center colorbuttons">
                                    <v-dialog v-model="dialog" class = "colordialogbox">
                                      <template v-slot:activator="{ props }">
                                       <vcard class="colorbuttonholder">
                                         <v-btn
                                          :color="color"
                                           dark
                                           v-bind="props"
                                           class="colorbutton"
                                         >
                                         </v-btn>
                                       </vcard>   
                                     </template>
                                     <v-card>
                                      <v-card-text>                                     
                                        <v-color-picker
                                          value="#7417BE"
                                          v-model="color"
                                          show-swatches
                                          canvas-height='200'
                                          class="colorpicker"
                                        ></v-color-picker>
                                      </v-card-text>
                                     </v-card>                                     
                                   </v-dialog>
                                 </div>                              
                              </v-col>  
                              <v-col cols='3' sm='3' md='3' class = "slidermove">  
                                  <v-slider  density="compact" :thumb-size="20" thumb-label="always"  thumb-color="purple" track-color="blue"  :max="10"  step="1" show-ticks="always" tick-size="4"></v-slider>
                              </v-col>  
                              <v-col cols='3' sm='3' md='3' class = "drawacircleholder">  
                                  <v-btn class="drawacircle">Draw Circle</v-btn>
                              </v-col>                                                            
                            </v-row>
                          </v-col>                                                    
                       </v-row>
                       <v-row class = "moveuplast moverowdown" >
                          <v-col cols='3' sm='3' md='3'>  
                              <v-select
                                  label=""
                                  density="compact"
                                  :items="types" 
                                  v-model = "selectedTypeList"
                                  class = 'select'
                                  @update:modelValue="changeTypeList"
                                  return-object                                  
                                 >
                              </v-select>                             
                          </v-col>     
                          <v-col cols='3' sm='3' md='3'>  
                              <v-select
                                  label=""
                                  density="compact"
                                  :items="status" 
                                  v-model = "selectedStatus"
                                  class = 'select'
                                  @update:modelValue="changeStatus"
                                  return-object                                   
                                 >
                              </v-select>                             
                          </v-col>                               
                          <v-col cols='6' sm='6' md='6'>  
                              <v-row>
                                  <v-col cols='6' sm='6' md='6' class = "dentaladd"> 
                                      <v-btn class="add" @click='addItem()'>ADD</v-btn>
                                  </v-col>
                                  <v-col class = "clearadd" cols='${getsmallwidthclear}' sm='${getsmallwidthclear}' md='${getsmallwidthclear}'> 
                                      <v-btn class="clear">CLEAR</v-btn>
                                  </v-col>
                              </v-row> 
                          </v-col>   
                                        
                       </v-row>                      
                    </v-card>
                 </v-col>
              </v-row>
            </v-col>   
          </v-row>   
        </v-container>
    </v-app>
</div>
</template>

<script setup>
  import CollapseLogo from './plugins/Collapse-Logo.vue'
  import ExpandLogo from './plugins/Expand-Logo.vue'
  import moment from 'moment'
  import format from 'date-fns/format'
  import Datepicker from 'vuejs3-datepicker'
  import DentalChart from './plugins/DentalChart.vue'
  import DrawingBoard from './plugins/DrawingBoard';
  import { toRaw } from 'vue';


</script>

<script>
 export default {
    components:{
       DentalChart
    }, 
    data() { return {
         collapse:  false,
         dialog: false,
         left: function(){
             return 0;
         },
         height: function(){
             return 100;
         },         
         defaultcardwidthmd : "8",
         defaultcardwidthsm : "6",   
         defaultcardwidthmdleft : "4",
         defaultcardwidthsmleft : "6",     
         selectedTeeth:null,
         teethdetails:[{selected:false,status:'Condition',number:1,surface:'',description:'CB - Precious men...'},{status:'Condition',number:1,surface:'',description:'CB - Precious men...'},{status:'Condition',number:1,surface:'',description:'CB - Precious men...'},{status:'Condition',number:1,surface:'',description:'CB - Precious men...'},{status:'Condition',number:1,surface:'',description:'CB - Precious men...'},{status:'Condition',number:1,surface:'',description:'CB - Precious men...'},{status:'Condition',number:1,surface:'',description:'CB - Precious men...'},{status:'Condition',number:1,surface:'',description:'CB - Precious men...'},{status:'Condition',number:1,surface:'',description:'CB - Precious men...'},{status:'Condition',number:1,surface:'',description:'CB - Precious men...'},{status:'Condition',number:1,surface:'',description:'CB - Precious men...'},{status:'Condition',number:1,surface:'',description:'CB - Precious men...'},{status:'Condition',number:1,surface:'',description:'CB - Precious men...'}],
         datedialog:false,
         mastercategories:[{name:'Crown',includein:[],type:['Treatment'],tsubtypes:['Crown','Dentures'],dsubtypes:[],materials:["Precious metal","Metal","Ceramic","Metal-ceramic"]},{name:'Crown & Bridge',includein:[],type:['Treatment'],tsubtypes:[],dsubtypes:[],materials:["Precious metal","Metal","Ceramic","Metal-ceramic"]},{name:'Screw',includein:[],type:['Treatment'],tsubtypes:[],dsubtypes:[],materials:[]},{name:'Tooth Root',includein:[],type:[],tsubtypes:['Pulpitis'],dsubtypes:['Endo Tx'],materials:[]},{name:'Restoration',includein:[],type:[],tsubtypes:[],dsubtypes:['Carries','Abrasion'],materials:["Amalgam","Composite Resin","Ceramic Inlay"]},{name:'Post and Core',includein:[],type:['Treatment'],tsubtypes:[],dsubtypes:[],materials:["Resin",""]},{name:'Pin',includein:[],type:['Treatment'],tsubtypes:[],dsubtypes:[],materials:[]},{name:'Sealant',includein:[],type:['Treatment'],tsubtypes:[],dsubtypes:[],materials:[]},{name:'Apicectomy',includein:[],type:['Treatment'],tsubtypes:[],dsubtypes:[],materials:[]},{name:'Tooth un-erupted',includein:[],type:['Diagnosis'],tsubtypes:[],dsubtypes:[],materials:[]},{name:'Gingival recession',includein:[],type:['Diagnosis'],tsubtypes:[],dsubtypes:[],materials:[]},{name:'Sensitive Dentin',includein:[],type:['Diagnosis'],tsubtypes:[],dsubtypes:[],materials:[]},{name:'Drifting',includein:[],type:['Diagnosis'],tsubtypes:[],dsubtypes:[],materials:[]},{name:'Impacted Tooth',includein:[],type:['Diagnosis'],tsubtypes:[],dsubtypes:[],materials:[]},{name:'Periapical Abcess',includein:[],type:['Diagnosis'],tsubtypes:[],dsubtypes:[],materials:[]},{name:'Diestema',includein:[],type:['Diagnosis'],tsubtypes:[],dsubtypes:[],materials:[]},{name:'Watched',includein:[],type:['Diagnosis'],tsubtypes:[],dsubtypes:[],materials:[]},{name:'Cracked Tooth',includein:[],type:[],tsubtypes:[],dsubtypes:[],materials:[]},{name:'Extraction',includein:[],type:[],tsubtypes:[],dsubtypes:[],materials:[]},{name:'Missing Tooth',includein:[],type:[],tsubtypes:[],dsubtypes:[],materials:[]}],
         mastersurfaces:[{name:'Occlusal',includein:['Restoration']},{name:'Incisal',includein:['Restoration']},{name:'Distal',includein:['Restoration']},{name:'Mesial',includein:['Restoration']},{name:'Palatal',includein:['Restoration']},{name:'Lingual',includein:['Restoration']},{name:'Facial',includein:['Restoration']},{name:'Carvical-Buccal',includein:['Restoration']},{name:'Carvical-Lingual',includein:['Restoration']}],
         mastermaterials:['Precious metal','Metal','Ceramic','Metal-ceramic','Amalgam','Composite Resin','Ceramic Inlay','Resin','Metal','Carbon Filter'],
         colors:[{color:'',gradient:'<linearGradient id="preciousmetal" gradientTransform="rotate(90)"><stop offset="0%" stop-color="rgba(255,215,0)" stop-opacity="0.9"></stop><stop offset="80%" stop-color="rgba(255,215,0)" stop-opacity="0.5"></stop><stop offset="100%" stop-color="rgba(255,215,0)" stop-opacity="0.3"></stop></linearGradient>'},{color:'',gradient:'<linearGradient id="metal" gradientTransform="rotate(90)"><stop offset="0%" stop-color="rgba(192,192,192)" stop-opacity="0.9"></stop><stop offset="80%" stop-color="rgba(192,192,192)" stop-opacity="0.5"></stop><stop offset="100%" stop-color="rgba(192,192,192)" stop-opacity="0.3"></stop></linearGradient>'},{color:'#fbeed5',gradient:''},{color:'',gradient:'<linearGradient id="metal-ceramic" gradientTransform="rotate(90)"><stop offset="80%" stop-color="rgb(251,238,213)" stop-opacity="0.7"></stop><stop offset="100%" stop-color="rgb(251,238,213)" stop-opacity="0.3"></stop></linearGradient>',bcolor:"rgb(251,238,213)"}],
         categories:[],
         surfaces:[],
         materials:[],
         subtypes:[],
         radiuses:['1','2','3','4','5'],     
         status : [],
         types:[], 
         additionalvalues:[],        
         masterstatus:[{name:"Condition(diagonisis)",color:"#FF0000"},{name:"Existing work (completed by other office)",color:"#000000"},{name:"Completed treatment (by our office)",color:"#0000FF"},{name:"Processing treatment",color:"#ED7D31"},{name:"And treatment plan (tx plan)",color:"#ED7D31"}],
         selectedStatus:"",
         selectedTypeList:"",
         typeselection:'', //':['treatment','diagnosis'],
         color: 'pink',
         selectedCategory:null,
         selectedSurface:null,
         selectedMaterial:null,
         selectedType:"Treatment",
         statusblock:0,
         width:0
    }},
    computed: {
       computedDateFormattedMomentjs () {
         return this.date ? moment(this.date).format('dddd, MMMM Do YYYY') : ''
       },
       computedDateFormattedDatefns () {
         return this.date ? format(this.date, 'dddd, MMMM Do YYYY') : '' 
       },
       getLeft : function(){
           return this.left;
       },
       getHeight : function(){
           return this.height;
       },    
       getLayoutChangemd : function(){
           return this.defaultcardwidthmd;
       },
       getLayoutChangesm : function(){
           return this.defaultcardwidthsm;
       },
       getLayoutChangemdleft : function(){
           return this.defaultcardwidthmdleft;
       },
       getLayoutChangesmleft : function(){
           return this.defaultcardwidthsmleft;
       }
    },   
    methods : {
       updatedefaultStatus:function(status){
          this.initselectedStatus= status;
       },
       hideCard: function() {
         this.collapse = !this.collapse;           
         if (!this.collapse){   
             this.defaultcardwidthmd = "8";
             this.defaultcardwidthsm = "6";
             this.defaultcardwidthmdleft = "4";
             this.defaultcardwidthsmleft = "6";
             this.changeLeft();
             this.changeHeight();
         }else{
             this.defaultcardwidthmd = "11";
             this.defaultcardwidthsm = "11";
             this.defaultcardwidthmdleft = "1";
             this.defaultcardwidthsmleft = "1";
             this.changeLeft();
             this.changeHeight();
         }                
       },
//       getTeeth(){
//        console.log("hit");
//          console.log(dataexchange.store.selectedTeeth);
//       },
       addItem(){
          if (this.selectedTeeth && this.selectedCategory){
              DrawingBoard.drawapply(this.selectedCategory.split(" ").join("").toUpperCase(),this.selectedTeeth.split("T").join(""),this.selectedCategory.split(" ").join("").toUpperCase(),this.selectedSurface,this.selectedMaterial,this.selectedType,this.selectedTypeList,this.selectedStatus,toRaw(this.masterstatus),toRaw(this.colors),toRaw(this.mastermaterials));
          }    
       },
       changeCategory(scat){    
          this.selectedTypeList = [];     
          this.surfaces = [];
          this.mastersurfaces.forEach((surface)=>{
              surface.includein.forEach((include)=>{
                   if (include.toUpperCase() === scat.toUpperCase()){
                       this.surfaces.push(surface.name);
                   }                      
              });
          });
          this.materials = [];
          this.mastercategories.forEach((cat)=>{
              if (cat.name.toUpperCase() === scat.toUpperCase()){
                  cat.materials.forEach((mat)=>{
                     this.materials.push(mat);
                  });
              }
          });
          this.types = [];
          toRaw(this.mastercategories).forEach((runcat)=>{ 
              if (runcat.name.toUpperCase() === scat.toUpperCase()){    
                  if (this.selectedType === "Diagnosis"){
                      runcat.dsubtypes.forEach((stype)=>{
                          this.types.push(toRaw(stype));
                      });
                  }   
                  if (this.selectedType === "Treatment"){
                      runcat.tsubtypes.forEach((stype)=>{
                         this.types.push(toRaw(stype));
                      });
                  } 
              }                   
          });          
       },
       changeSurface(){

       },   
       changeMaterial(){

       },    
       changeType(type){
          if (type){
              this.selectedType = "Diagnosis";
          }else{
              this.selectedType = "Treatment";
          }
          this.typelist = [];
          this.mastercategories.forEach((cat)=>{          
              if (this.selectedType === "Diagnosis"){
                  cat.dsubtypes.forEach((stype)=>{
                     this.typelist.push(stype);
                  });
              }   
              if (this.selectedType === "Treatment"){
                  cat.tsubtypes.forEach((stype)=>{
                     this.typelist.push(stype);
                  });
              }                
          });
       },     
       changeTypeList(type){ 
          this.selectedTypeList = type;
       },
       changeStatus(status){
          this.selectedStatus = status;
       }, 
       generateImage(svg1,svg2){
          DrawingBoard.generateImage(svg1,svg2); 
       },   
       changeHeight: function() {  
          if (this.collapse){       
              if (window.innerWidth <= 600){
                  this.height = 10;
              }else{
                  this.height = 100;            
              }                
          }else{      
              this.height = 100;                
          }  
       },     
       changeLeft: function() {  
        console.log("sized");
          if (this.collapse){
              this.left = 0;
          }else{
             let pos = 0;
             if (document.querySelector(".item_left")){
                 pos = document.querySelector(".item_left").offsetWidth-document.querySelector(".item_left").offsetLeft;
                 if (!this.collapse){
                     pos =  localStorage.getItem("pos")?parseFloat(localStorage.getItem("pos"))+1:0;              
                 }
             }else{
                 pos =  localStorage.getItem("pos")?parseFloat(localStorage.getItem("pos")):0; 
                 console.log(pos);
             }
             this.left = pos-50;
          }
          this.changeHeight();
       },
       getsmallwidth :function(){
           if (window.innerWidth > 601){
               return '4';
           }
           return '3.5';
       },
       getsmallwidthclear :function(){
           if (window.innerWidth > 601){
               return '5';
           }
           return '4';
       }         

    },
    mounted() {
        window.addEventListener('load', () => {
          if (this.collapse){
              this.left = 0;
          }else{
             let pos = 0;
             if (document.querySelector(".item_left")){
                 pos = document.querySelector(".item_left").offsetWidth-document.querySelector(".item_left").offsetLeft;
                 localStorage.setItem("pos",pos);
             }        
             this.left = pos-50;
          }     
        })   
        window.emitter.on('selectedTeeth', (teeth) => {
           if (!teeth){
               this.selectedStatus = "";
               this.categories = [];
               this.surfaces = [];
               this.materials = [];
               this.subtypes = [];
               this.radiuses = ['1','2','3','4','5'];     
               this.status = [];
               this.types = []; 
               this.additionalvalues = [];
               this.selectedCategory = null;
               this.selectedSurface = null;
               this.selectedMaterial = null;
               this.selectedType = "Treatment";
               this.selectedTypeList = "";
               return;
           }
           console.log(this.masterstatus);
           this.selectedStatus = this.masterstatus[this.statusblock].name
           this.categories = [];
           this.selectedTeeth = teeth;
           let cats = []
           this.mastercategories.forEach((category)=>{
               let incin = category.includein.join(';');
               if (incin){
                   incin += ";";
               }
               if (!incin){
                   cats.push(category.name);
               }else{
                   if (incin.indexOf(teeth+';') > 0){
                       cats.push(category.name);              
                   }
               }
           });
           cats = cats.sort((a,b)=>{
              if (a >= b){
                  return 1
              }
              if (a < b){
                  return -1
              }
           })
           this.categories = cats;
           this.masterstatus.forEach((status)=>{
              this.status.push(status.name);
           })
        })    
    },    
    created() {
      window.addEventListener("resize", this.changeLeft);
    },
    unmounted() {
      window.removeEventListener("resize", this.changeLeft);
    },   
 }  
</script>

<style>
::-webkit-scrollbar{
    width: 6px;
    height:6px;
}
::-webkit-scrollbar-track{
    background-color: rgb(0, 0, 0);
    border-radius: 5px;
}
*::-webkit-scrollbar-track {
  background: white;
}

*::-webkit-scrollbar-thumb {
  background-color: rgb(211,211,211);
  border-radius: 6px;
}

.dateinput .vuejs3-datepicker__typeablecalendar{
    top:10px !important;
    left:3px !important;
}

.vuejs3-datepicker__calendar-topbar{
  display:none !important;
}

.colordialogbox{
  width:90vw;
  height:80vh;
}

</style>

<style scoped>


.item_left{
   height:100vh;
   margin-top:5px;
}

.item_right{
   height:100vh;
   margin-top:5px;
}


.selected{
  margin-top:-1vh;
  z-index:10;
}

.selected_text{
  font-size:14px;
}

.cebuttons{
  width: 375px;
  position: absolute;
  z-index: 1;
}

.cebutton{
  z-index: 1;
  max-width: 5px;
  min-width: 5px;
  margin-top:15px;
  opacity:.5;
}


.dentalchart{
    height:70vh;
}
.dentalchart_details{
    height:30vh;
}

.full{
  height:100%;
  border:1px solid grey;
  border-opacity:.5;
}

.buttonsholder{
  margin-top:-25px !important;
  padding-bottom:0px;
}

.v-card-text{
  padding-bottom:unset !important;
}

.buttonsholder button{
   border:1px solid grey;
   border-opacity:.5;
   font-size:.9vw;
}

.text-center{
   align:center;
   width : 20vw;
   font-size:.9vw;
}

.heading{
   margin-left:5vw;
}

.text-left{
   align:left;
   width : 20vw;
   font-size:.9vw;
}

.moveinput{
     margin-top:1vh;
}


.buttonsholderright button{
   border:1px solid grey;
   border-opacity:.5;
   width:100%;
   font-size:.9vw;
}

.moveleft{
  margin-left:-9.5vw !important;
  float:left;
}

.slidermove{
  margin-left:5vw;
  margin-top:-1vht;
}

.drawacircle{
   font-size:.9vw;
   width:6vw !important;
   max-width:6vw !important;
   min-width:6vw !important;
   text-transform: none;
   color:#ffffff;
   background:rgba(82, 78, 183,1);
}

.drawacircleholder{
   margin-top: -0.5vh;
   margin-left:-2vh ;
}
</style>

<style>
.vuejs3-datepicker input{
   max-width: 100%;
   padding-top:6px;
   padding-bottom:5px;
   padding-left:29px;
   padding-right:10px;
   min-width:0px;
   min-width:unset !important;
   width:100%;
}   

.v-btn__content {
  white-space: unset !important;
}

.buttonsholderpng button{
    border : 1px solid rgba(30,144,255,.7) ;
    color  : rgba(30,144,255,.7);  
    font-size:.9vw;
    float:right;
}

.details{
   overflow:hidden !important;
}

.details:hover{
  overflow:scroll !important; 
}

.v-btn--size-default{
  min-width:unset !important;
}

.dentaldiagram{
   background:#000;
   height:calc(84vh - 10px);
   margin-left:20px;
   display:flex;
   clip-path: polygon(0 0, 100% 0, 100% 100%, 0 100%);
}

.dentalholder{
  width: calc(100% - 15px);
}

.category{
   font-size:.9vw;
}

.categorydetails{
   font-size:.9vw;
}
.select .v-field__append-inner{
    left: -15px !important;
    position: absolute;
}

.select .v-field__outline {
   --v-field-border-width: unset !important;
   --v-field-border-opacity : .2 !important;
   --v-field-padding: 0px !important;
}

.select:hover{
   background:none !important;
}

.category{
  margin-top:12px;
}

.treatment{
  font-size:.9vw;
}


.select .v-select__selection-text{
  font-size:.9vw;
  margin-top:5px;
}

.select .v-input__control{
  max-height:40px !important;
  padding:0px !important;
}

.diagnosis{
  font-size:.9vw;
  margin-top: 12px;
}

.typeselectionswitch{
  margin-top:-20px;
}

.moveupfirst{
  margin-top:-28px !important;
}

.moveup{
  margin-top:-38px !important;
}

.moveuplast{
  margin-top:-40px !important;
  height:50px;
}

.moveupsecond{
  margin-top:-41px !important;
}

.colorpick{
   position:absolute;
   left:50%;
   top:50%;
}

.colorbutton{
  width: 30px !important;
  height: 10px !important;
}

.colorbuttonholder{
  width: 35px !important;
  height: 15px !important;  
  padding:2px;
  padding-bottom:5px;
  border:1px solid;
  margin-top:-50px !important;
}

.add{
  width:100% !important;
  font-size:.9vw !important;
  background:	rgba(30,144,255,1) !important;
  color:#ffffff !important;
  height:39px !important;
}

.clear{
    font-size:.9vw !important;
    height:40px !important;
}

.clearadd{
    margin-top:10px !important;
}   

.moverowdown{
  margin-top : -37px !important;
}

.moverowlast{
  margin-top:3px !important;
}

.colorbuttons{
    margin-top:.5vh !important;
}

@media screen and (min-width:501px) and (max-width: 800px) {
     .drawacircle{
       margin-top:8px !important;
     }
}


@media screen and (min-height: 1300px) {
   .moveuplast{
     margin-top:-30px !important;
   }
   .moveup{
     margin-top:-28px !important;
   }

   .moveupfirst{
     margin-top:-28px !important;
   }

   .typeselection{
     margin-left:-10px;
   }

   .diagnosis{
     margin-left:24px !important;
   }

   .drawacircle{
      margin-top:15px !important;
   }

   .dateinput{
      margin-top:-2px;
   }
   .slidermove{
      margin-top:-10px !important;
   } 
}  

@media screen and (min-width: 601px) {
   body html {
      overflow:hidden;
   }    
}      

@media screen and (max-width: 601px) {
  .vuejs3-datepicker input{
    font-size:3vw !important;  
  }  

  .buttonsholderright button{
    font-size:2vw !important;
  }  

  .buttonsholder button{
    font-size:3vw !important;
  }  

  .buttonsholderpng button{
    font-size:1.5vw !important;
  }  

  .text-center{
    font-size:3vw !important;
  }

  .text-left{
    font-size:3vw !important;
  }

  .v-table__wrapper{
     height:60vh !important;
  }

  .dateinput .vuejs3-datepicker__typeablecalendar {
    top: 8px !important;
  }

  .dentaldiagram{
    height:calc(58vh - 8px) !important;
  }

  .vuejs3-datepicker input {
    padding-top: 8px !important;
    padding-bottom: 9px !important;
    margin-top:2px !important;
  }  

  .colorpicker{
    max-width:90vw !important;
  }

  .v-color-picker-canvas{
    margin-left:20px;
  }

  .diagnosis{
    font-size:1.5vw;
    margin-left: 11px;
  }
  .treatment{
    font-size:1.5vw;
  }
  .select{
    font-size:1.5vw;
  }
  .select .v-select__selection-text{
    font-size:1.2vw;
    margin-top:5px;
    display:flex;
  }  
  .select .v-input__slot {
    padding: 0 !important;
  }
  .category{
    font-size:1.5vw;
  }
  .surface{
    font-size:1.5vw;
  }
  .drawacircleholder{
    margin-left: -1.5vh !important
  }
  .slidermove{
    margin-left:4vw !important;
  }
  .drawacircle{
    font-size:2vw;
  }
  .add{
     font-size:2vw !important;
  }
  .clear{
     font-size:2vw !important;
  }

  .drawacircleholder{
      margin-top:-.2vh !important;
  }
   
}  

@media screen and (min-width: 601px) and (max-width:900px) {
  .typeselectionswitch{
        left:4vw;
        position:absolute;
   }   
}   

@media screen and (min-width: 901px){
  .typeselectionswitch{
        left:unset;
        position:relative;
   }   
}

@media screen and (max-width: 600px){
  .typeselectionswitch{
        left:unset;
        position:relative;
   }    
}


@media screen and (max-width: 550px) {
   .moveuplast{
     margin-top:-30px !important;
   }
   .moveup{
     margin-top:-28px !important;
   }

   .moveupfirst{
     margin-top:-28px !important;
   }

   .typeselection{
     margin-left:-10px;
   }

   .diagnosis{
     margin-left:24px !important;
   }

   .drawacircleholder{
      margin-top:-1.5vh !important;
   }

   .dateinput{
      margin-top:-2px;
   }

   .slidermove{
      margin-top:-1vh !important;
   } 

}
</style>


