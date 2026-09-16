import * as THREE from './assets/three.module.js';

const canvas = document.querySelector('#house-canvas');
const stage = document.querySelector('#model-stage');
const section = document.querySelector('#systems');
const slider = document.querySelector('#assembly');
const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
const scenes = [
 ['Everything has a part to play.', 'Explore the pieces of a micro-farm designed to work as one. This assembly tells the concept story; the engineered design is still ahead.'],
 ['Precision makes room for possibility.', 'A manufactured timber core establishes the home. Repeated parts, accessible connections, and a structure designed with future additions in mind.'],
 ['A little mud. A lot of meaning.', 'Insulation and a rear wall intended for tested local-earth infill. A robust physical layer comes first; intelligent controls are an added capability.'],
 ['A second skin, with room to move.', 'Translucent sides reveal the structure underneath. A glazed front brings light to the greenhouse; separate kinetic sails open the deck to outdoor life.'],
 ['The systems talk to each other.', 'Water, solar energy, greenhouse ventilation, and sensor arrays conceived together. A local AI brain is intended to coordinate them, with data sharing controlled by the inhabitant.'],
 ['One home. Two layers of capability.', 'Low-tech essentials and integrated high-tech support. The goal: a useful, liveable home even when its electronics are unavailable. True ownership is part of the design.']
];
let renderer;
try {
 renderer = new THREE.WebGLRenderer({canvas, antialias:true, alpha:true});
 renderer.setPixelRatio(Math.min(window.devicePixelRatio,1.8));
 renderer.shadowMap.enabled = true;
 renderer.shadowMap.type = THREE.PCFSoftShadowMap;
 renderer.outputColorSpace = THREE.SRGBColorSpace;
 renderer.toneMapping = THREE.ACESFilmicToneMapping;
 renderer.toneMappingExposure = 1.3;
} catch (error) {
 document.querySelector('#model-fallback').hidden = false;
 canvas.style.display = 'none';
 document.querySelectorAll('.model-tools button').forEach(b => b.disabled = true);
}
const scene = new THREE.Scene();
const camera = new THREE.OrthographicCamera(-9,9,6,-6,.1,100);
const house = new THREE.Group();
scene.add(house);
scene.add(new THREE.HemisphereLight(0xffffff,0x687367,2.6));
const sun = new THREE.DirectionalLight(0xfff7dd,3.6);
sun.position.set(-6,12,7);sun.castShadow=true;sun.shadow.mapSize.set(1024,1024);
Object.assign(sun.shadow.camera,{left:-10,right:10,top:10,bottom:-10,near:.1,far:35});
sun.shadow.bias=-.001;sun.shadow.normalBias=.025;scene.add(sun);
const fill = new THREE.DirectionalLight(0xd7e9ff,1.2);fill.position.set(6,5,-5);scene.add(fill);
const mat=(color,extra={})=>new THREE.MeshStandardMaterial({color,roughness:.72,...extra});
const wood=mat(0xc49e6a), lightWood=mat(0xe4c699), darkWood=mat(0x9c704c), sage=mat(0x6f8b79), coral=mat(0xed644e), earth=mat(0xb39170), pale=mat(0xf6f1df), panel=mat(0x353b5a,{metalness:.25,roughness:.3}), glass=mat(0xb6dfe2,{transparent:true,opacity:.28,roughness:.2,depthWrite:false,side:THREE.DoubleSide}), shell=mat(0xf0f1df,{transparent:true,opacity:.45,roughness:.6,side:THREE.DoubleSide,depthWrite:false}), blue=mat(0x3333cc), leaf=mat(0x526c43);
function box(parent,w,h,d,x,y,z,material){const o=new THREE.Mesh(new THREE.BoxGeometry(w,h,d),material);o.position.set(x,y,z);o.castShadow=true;o.receiveShadow=true;parent.add(o);return o;}
function tube(parent,points,r,material){const curve=new THREE.CatmullRomCurve3(points.map(p=>new THREE.Vector3(...p)));const o=new THREE.Mesh(new THREE.TubeGeometry(curve,points.length*8,r,6,false),material);o.castShadow=true;parent.add(o);return o;}
function cylinder(parent,r,h,x,y,z,material){const o=new THREE.Mesh(new THREE.CylinderGeometry(r,r,h,20),material);o.position.set(x,y,z);o.castShadow=true;parent.add(o);return o;}
function group(){const g=new THREE.Group();house.add(g);return g;}
const ground=new THREE.Mesh(new THREE.PlaneGeometry(100,100),new THREE.ShadowMaterial({opacity:.12}));ground.rotation.x=-Math.PI/2;ground.position.y=-.09;ground.receiveShadow=true;scene.add(ground);
// Base and deck stay grounded as the other systems come together.
const base=group();
box(base,5.3,.22,5.7,0,.25,.85,darkWood);
for(let x=-2.55;x<2.6;x+=.18) box(base,.164,.08,5.7,x,.40,.85,lightWood);
for(const x of [-2.3,2.3])for(const z of [-1.7,1.1,3.2]){cylinder(base,.11,.42,x,.06,z,sage);box(base,.32,.08,.32,x,-.02,z,coral);}
const structure=group();
for(let z=-1.65;z<=1.7;z+=.55){
 tube(structure,[[-2.3,.47,z],[-2.3,2.4,z],[-2.22,2.86,z],[-1.95,3.06,z],[0,3.10,z],[1.95,3.06,z],[2.22,2.86,z],[2.3,2.4,z],[2.3,.47,z]],.075,lightWood);
}
for(const x of [-2.3,2.3]){box(structure,.14,.13,3.5,x,1.75,0,wood);box(structure,.14,.13,3.5,x,.55,0,wood);}
for(const x of [-2.25,2.25])for(const z of [-1.62,1.65])box(structure,.19,.21,.2,x,.67,z,coral);
const comfort=group();
box(comfort,4.4,2.48,.2,0,1.73,-1.65,earth);
for(let y=.63;y<2.97;y+=.12)box(comfort,4.42,.012,.214,0,y,-1.65,darkWood);
// Rear circular tinted window is schematic, not a specification.
const bubble=new THREE.Mesh(new THREE.CircleGeometry(.36,48),mat(0xf1a98f,{transparent:true,opacity:.85,side:THREE.DoubleSide}));bubble.position.set(1,2.36,-1.526);comfort.add(bubble);
const ring=new THREE.Mesh(new THREE.TorusGeometry(.38,.045,8,48),wood);ring.position.copy(bubble.position);comfort.add(ring);
box(comfort,2.25,.14,1.25,-.92,1.15,-.82,wood);
for(let i=0;i<5;i++)box(comfort,.7,.11,.26,-1.6,.55+i*.115,.56-i*.24,lightWood);
box(comfort,1.3,.67,.55,.9,.81,-.85,sage);box(comfort,1.39,.065,.63,.9,1.18,-.85,pale);
box(comfort,1.1,.32,.62,-.95,1.36,-.92,pale);
const roof=group();box(roof,4.55,.11,3.42,0,3.14,0,lightWood);
const sides=[group(),group()];
sides.forEach((g,i)=>{
 const side=i===0?-1:1;
 const geo=new THREE.PlaneGeometry(3.4,2.62,90,1);const p=geo.attributes.position;
 for(let j=0;j<p.count;j++)p.setZ(j,Math.sin(p.getX(j)*75)*.02);
 geo.computeVertexNormals();const o=new THREE.Mesh(geo,shell);o.rotation.y=side*Math.PI/2;o.position.set(side*2.40,1.79,0);g.add(o);
 for(let z=-1.65;z<1.7;z+=.12)box(g,.018,2.6,.009,side*2.415,1.79,z,pale);
});
const glazing=group();
for(let x=-2.25;x<2.25;x+=1.12){box(glazing,1.05,2.10,.025,x+.54,1.54,1.76,glass);box(glazing,.042,2.47,.06,x,1.72,1.78,sage);}
box(glazing,4.55,.05,.07,0,2.64,1.78,sage);
for(let y=2.73;y<3.03;y+=.09){const louver=box(glazing,4.48,.026,.19,0,y,1.74,sage);louver.rotation.x=.4;}
const resources=group();
for(let x=-1.8;x<=1.8;x+=1.2)for(let z=-1.10;z<=.8;z+=.86){const p=box(resources,1.11,.06,.79,x,3.29,z,panel);p.rotation.x=-.04;for(let c=0;c<4;c++)box(resources,.008,.01,.73,x-.4+c*.27,3.327,z,lightWood);}
box(resources,.1,.1,3.5,2.42,3.03,0,sage);
tube(resources,[[2.42,3,1.5],[2.6,2.8,1.5],[2.6,.8,1.5]],.035,sage);
cylinder(resources,.35,.64,2.23,.80,2.65,sage);
const smart=group();
tube(smart,[[-2.25,.63,1.65],[-2.25,.63,-1.52],[2.25,.63,-1.52],[2.25,.63,1.65]],.016,blue);
for(const x of [-2.24,2.24])for(const z of [-1.55,0,1.6]){const dot=new THREE.Mesh(new THREE.SphereGeometry(.048,10,10),coral);dot.position.set(x,1.80,z);smart.add(dot);}
box(smart,.26,.30,.1,1.7,1.8,-1.48,blue);
const plants=group();
for(const x of [-1.83,1.83]){
 box(plants,.6,.40,1.18,x,.68,2.3,earth);box(plants,.52,.035,1.08,x,.89,2.3,darkWood);
 for(let z=1.92;z<2.8;z+=.25){cylinder(plants,.015,.3,x,1.06,z,leaf);for(const side of [-1,1]){const l=new THREE.Mesh(new THREE.SphereGeometry(.12,8,6),leaf);l.scale.set(1,.28,.5);l.position.set(x+side*.08,1.15,z);l.rotation.z=side*.5;plants.add(l);}}
}
const sails=group();const sailPivots=[];
for(let i=0;i<2;i++){
 const pivot=new THREE.Group();pivot.position.set(i===0?-1.18:1.18,2.99,1.6);sails.add(pivot);sailPivots.push(pivot);
 const geom=new THREE.PlaneGeometry(2.36,2.2,18,18);const ps=geom.attributes.position;
 for(let j=0;j<ps.count;j++){const x=ps.getX(j),y=ps.getY(j);ps.setZ(j,-.18*Math.cos(x/1.18*Math.PI/2)*Math.cos(y/1.1*Math.PI/2));}
 geom.computeVertexNormals();const sail=new THREE.Mesh(geom,mat(0xf8f0d9,{side:THREE.DoubleSide}));sail.rotation.x=-Math.PI/2;sail.position.set(0,0,1.1);sail.castShadow=true;pivot.add(sail);
 tube(pivot,[[-1.18,0,0],[-1.23,-.01,1],[-1.16,.03,2.2]],.027,sage);
 tube(pivot,[[1.18,0,0],[1.23,-.01,1],[1.16,.03,2.2]],.027,sage);
 for(const x of [-1.17,1.17]){const joint=new THREE.Mesh(new THREE.SphereGeometry(.065,12,12),coral);joint.position.set(x,0,0);pivot.add(joint);}
}
let target=0,current=0,manual=false,dirty=true,visible=false,angle=.60,angleCurrent=.60,sailTarget=0,sailCurrent=0,aspect=1;
function setProgress(p,fromControl=false){
 target=THREE.MathUtils.clamp(p,0,1);if(fromControl)manual=true;
 const index=Math.min(5,Math.round(target*5));
 document.querySelector('#system-name').textContent=scenes[index][0];
 document.querySelector('#system-description').textContent=scenes[index][1];
 document.querySelectorAll('[data-step]').forEach(b=>b.setAttribute('aria-pressed',String(+b.dataset.step===index)));
 slider.value=Math.round(target*100);document.querySelector('#assembly-value').textContent=`${Math.round(target*100)}%`;dirty=true;
}
function scrollProgress(){
 if(reduceMotion.matches||manual)return;
 const r=section.getBoundingClientRect();const travel=Math.max(1,section.offsetHeight-window.innerHeight);
 setProgress(-r.top/travel);
}
window.addEventListener('scroll',scrollProgress,{passive:true});
['wheel','touchstart'].forEach(type=>window.addEventListener(type,()=>{manual=false;},{passive:true}));
document.querySelectorAll('[data-step]').forEach(b=>b.addEventListener('click',()=>setProgress(+b.dataset.step/5,true)));
slider.addEventListener('input',()=>setProgress(+slider.value/100,true));
document.querySelector('#rotate-model').addEventListener('click',()=>{angle+=Math.PI/4;dirty=true;});
document.querySelector('#reset-model').addEventListener('click',()=>{angle=.60;setProgress(reduceMotion.matches?1:0,true);});
window.addEventListener('sailchange',e=>{sailTarget=[1.42,.65,0][e.detail];dirty=true;});
function resize(){
 const {width,height}=stage.getBoundingClientRect();if(!width||!height)return;
 renderer?.setSize(width,height,false);
 const ratio=width/height;aspect=ratio;const halfHeight=Math.max(4.7,5.4/ratio);
 camera.left=-halfHeight*ratio;camera.right=halfHeight*ratio;camera.top=halfHeight;camera.bottom=-halfHeight;camera.updateProjectionMatrix();dirty=true;
}
new ResizeObserver(resize).observe(stage);
new IntersectionObserver(entries=>{visible=entries[0].isIntersecting;if(visible){dirty=true;scrollProgress();}},{rootMargin:'150px'}).observe(stage);
const phase=(v,start,end)=>THREE.MathUtils.smoothstep(v,start,end);
function apply(){
 const a=1-phase(current,0,.22),b=1-phase(current,.14,.4),c=1-phase(current,.35,.64),d=1-phase(current,.58,.88),e=1-phase(current,.8,1);
 structure.position.y=a*.8;comfort.position.set(-b*.4,0,-b*1.5);
 roof.position.y=c*2.7;sides[0].position.x=-c*1.55;sides[1].position.x=c*1.55;glazing.position.z=c*1.8;
 resources.position.y=d*3.8;smart.position.y=d*.8;plants.position.z=e*.5;sails.position.y=e*1.8;
 sailPivots.forEach(p=>p.rotation.x=sailCurrent);
 const lift=(1-current)*1.4;
 const halfHeight=Math.max(4.1+(1-current)*.6,5.4/aspect);
 camera.left=-halfHeight*aspect;camera.right=halfHeight*aspect;camera.top=halfHeight;camera.bottom=-halfHeight;camera.updateProjectionMatrix();
 camera.position.set(Math.sin(angleCurrent)*12,7.6+lift,Math.cos(angleCurrent)*12);camera.lookAt(0,2.0+lift,0);
}
let previous=0;
function frame(t){
 requestAnimationFrame(frame);if(!visible||document.hidden||!renderer)return;
 const delta=Math.min((t-previous)/1000,.08);previous=t;
 const moving=Math.abs(target-current)>.0005||Math.abs(angle-angleCurrent)>.0005||Math.abs(sailTarget-sailCurrent)>.0005;
 if(!dirty&&!moving)return;
 const rate=reduceMotion.matches?1:1-Math.exp(-8*delta);
 current+=(target-current)*rate;angleCurrent+=(angle-angleCurrent)*rate;sailCurrent+=(sailTarget-sailCurrent)*rate;
 apply();renderer.render(scene,camera);dirty=false;
}
reduceMotion.addEventListener('change',()=>{setProgress(1,true);dirty=true;});
canvas.addEventListener('webglcontextlost',event=>{event.preventDefault();document.querySelector('#model-fallback').hidden=false;canvas.style.visibility='hidden';});
canvas.addEventListener('webglcontextrestored',()=>{document.querySelector('#model-fallback').hidden=true;canvas.style.visibility='visible';dirty=true;});
setProgress(reduceMotion.matches?1:0);resize();requestAnimationFrame(frame);
