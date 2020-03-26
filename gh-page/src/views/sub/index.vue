<template>
    <div>
		<div id="container"></div>
		<!-- <div id="menu">
			<button  @click="click('table')">TABLE</button> 
			<button  @click="click('sphere')">SPHERE</button>
			<button  @click="click('helix')">HELIX</button>
			<button  @click="click('grid')">GRID</button>
		</div> -->
    </div>
</template>

<script>
import * as THREE from 'three';
import {TWEEN} from 'three/examples/jsm/libs/tween.module.min.js';
import {TrackballControls} from 'three/examples/jsm/controls/TrackballControls.js';
import {CSS3DRenderer, CSS3DObject} from 'three/examples/jsm/renderers/CSS3DRenderer.js';//CSS3DObject

import configs from './configs';

export default {
    name: 'App',
    data() {
        return {
            configs,
            camera: null,
            scene: null,
            renderer: null,
            controls: null,
            objects: [],
            targets: {helix: [], grid: []},
            n: 0
        };
    },
    mounted() {
        const vm = this;
        vm.init();
        vm.animate();
    },
    methods: {
        render() {
            const vm = this
            vm.renderer.render(vm.scene, vm.camera);
        },

        animate() {
            const vm = this
            requestAnimationFrame(vm.animate);
            TWEEN.update();
            vm.controls.update();

            vm.n++
        },

        onWindowResize() {
            const vm = this;
            vm.camera.aspect = window.innerWidth / window.innerHeight;
            vm.camera.updateProjectionMatrix();
            vm.renderer.setSize(window.innerWidth, window.innerHeight);
            vm.render();
        },
        transform(targets, duration) {
            const vm = this;
            TWEEN.removeAll();
            for (let i = 0; i < vm.objects.length; i++) {
                let object = vm.objects[i];
                let target = targets[i];
                new TWEEN.Tween(object.position)
                    .to({x: target.position.x, y: target.position.y, z: target.position.z}, Math.random() * duration + duration)
                    .easing(TWEEN.Easing.Exponential.InOut)
                    .start();
                new TWEEN.Tween(object.rotation)
                    .to({x: target.rotation.x, y: target.rotation.y, z: target.rotation.z}, Math.random() * duration + duration)
                    .easing(TWEEN.Easing.Exponential.InOut)
                    .start();
            }
            new TWEEN.Tween(window)
                .to({}, duration * 2)
                .onUpdate(vm.render)
                .start();
        },

        click(key) {
            const vm = this;
            vm.transform(vm.targets[key], 3000);
        },
        clickEle(args){
            console.log(args)
        },
        init() {
            const vm = this;
            vm.camera = new THREE.PerspectiveCamera(40, window.innerWidth / window.innerHeight, 1, 10000);
            vm.camera.position.z = 3000;
            vm.scene = new THREE.Scene();
            vm.setTable();
        },

        setTable() {
            const vm = this;
            vm.configs.forEach((item,i)=>{
                let element = document.createElement('div');
                element.className = 'element';
                element.style.backgroundColor = 'rgba(0,127,127,' + (Math.random() * 0.5 + 0.25) + ')';
                let number = document.createElement('div');
                number.className = 'number';
                number.textContent = i ;
                element.appendChild(number);
                let symbol = document.createElement('div');
                symbol.className = `symbol ${item.icon}`
                element.appendChild(symbol);
                let details = document.createElement('div');
                details.className = 'details';
                details.innerHTML = item.name;
                element.appendChild(details);
                element.onclick=vm.clickEle
                let object = new CSS3DObject(element);
                object.position.x = Math.random() * 4000 - 2000;
                object.position.y = Math.random() * 4000 - 2000;
                object.position.z = Math.random() * 4000 - 2000;
                vm.scene.add(object);
                vm.objects.push(object);
            })
            


            //setHelix
            let vector = new THREE.Vector3();
            for (let i = 0, l = vm.objects.length; i < l; i++) {
                let theta = i * 0.175 + Math.PI;
                let y = - (i * 8) + 450;
                let object = new THREE.Object3D();
                object.position.setFromCylindricalCoords(900, theta, y);
                vector.x = object.position.x * 2;
                vector.y = object.position.y;
                vector.z = object.position.z * 2;
                object.lookAt(vector);
                vm.targets.helix.push(object);
            }
            //setGrid
            for (let i = 0; i < vm.objects.length; i++) {
                let object = new THREE.Object3D();
                object.position.x = ((i % 5) * 400) - 800;
                object.position.y = (- (Math.floor(i / 5) % 5) * 400) + 800;
                object.position.z = (Math.floor(i / 25)) * 1000 - 2000;
                vm.targets.grid.push(object);
            }
            //initRender
            vm.renderer = new CSS3DRenderer();
            vm.renderer.setSize(window.innerWidth, window.innerHeight);
            document.getElementById('container').appendChild(vm.renderer.domElement);
            //
            vm.controls = new TrackballControls(vm.camera, vm.renderer.domElement);
            vm.controls.minDistance = 500;
            vm.controls.maxDistance = 60000;
            vm.controls.addEventListener('change', vm.render);
            vm.controls.rotateSpeed = 2;// 旋转速度
            vm.controls.zoomSpeed = 2;// 缩放速度
            vm.controls.panSpeed = 1;// 平controls
            vm.transform(vm.targets.helix, 2000);
            //
            window.addEventListener('resize', vm.onWindowResize, false);
            // vm.controls.update();
        },
    },


};
</script>

<style lang="scss">
@import '../../style/sub.scss';
</style>