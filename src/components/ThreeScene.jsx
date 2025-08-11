import React, { useRef, useEffect } from 'react'
import * as THREE from 'three'

export default function ThreeScene(){
  const mountRef = useRef(null)

  useEffect(()=>{
    const mount = mountRef.current
    if(!mount) return

    const scene = new THREE.Scene()
    const camera = new THREE.PerspectiveCamera(50, mount.clientWidth / mount.clientHeight, 0.1, 1000)
    camera.position.z = 3

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true })
    renderer.setSize(mount.clientWidth, mount.clientHeight)
    renderer.setPixelRatio(typeof window !== 'undefined' ? window.devicePixelRatio : 1)
    mount.appendChild(renderer.domElement)

    const geometry = new THREE.IcosahedronGeometry(1.1, 1)
    const material = new THREE.MeshStandardMaterial({
      color: 0x7C3AED,
      roughness: 0.35,
      metalness: 0.6,
      transparent: true,
      opacity: 0.95
    })
    const mesh = new THREE.Mesh(geometry, material)
    scene.add(mesh)

    const ambient = new THREE.AmbientLight(0xffffff, 0.6)
    scene.add(ambient)
    const point = new THREE.PointLight(0xffffff, 0.7)
    point.position.set(5,5,5)
    scene.add(point)

    let mouseX = 0, mouseY = 0
    function onMove(e){
      const rect = mount.getBoundingClientRect()
      mouseX = ((e.clientX - rect.left) / rect.width - 0.5) * 2
      mouseY = ((e.clientY - rect.top) / rect.height - 0.5) * -2
    }
    window.addEventListener('mousemove', onMove)

    function handleResize(){
      if(!mount) return
      renderer.setSize(mount.clientWidth, mount.clientHeight)
      camera.aspect = mount.clientWidth / mount.clientHeight
      camera.updateProjectionMatrix()
    }
    window.addEventListener('resize', handleResize)

    let req = null
    const animate = ()=>{
      mesh.rotation.x += 0.003
      mesh.rotation.y += 0.006
      mesh.rotation.x += mouseY * 0.002
      mesh.rotation.y += mouseX * 0.003

      renderer.render(scene, camera)
      req = requestAnimationFrame(animate)
    }
    animate()

    return ()=>{
      cancelAnimationFrame(req)
      window.removeEventListener('mousemove', onMove)
      window.removeEventListener('resize', handleResize)
      if(renderer && renderer.domElement && mount.contains(renderer.domElement)){
        mount.removeChild(renderer.domElement)
      }
      geometry.dispose()
      material.dispose()
      renderer.dispose()
    }
  },[])

  return (
    <div ref={mountRef} style={{ width: '100%', height: '100%' }} />
  )
}
