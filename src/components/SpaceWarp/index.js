import React, { useEffect, useRef } from "react"
import styled from "styled-components"
import * as THREE from "three"

export const StyledCube = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  z-index: -1;
`

const SpaceWarp = () => {
  const cubeRef = useRef()

  useEffect(() => {
    let scene, camera, renderer

    const init = () => {
      //create scene object
      scene = new THREE.Scene()

      //setup camera with facing upward
      camera = new THREE.PerspectiveCamera(
        60,
        window.innerWidth / window.innerHeight,
        1,
        1000
      )
      camera.position.z = 1
      camera.rotation.x = Math.PI / 2

      //setup renderer
      renderer = new THREE.WebGLRenderer()
      renderer.setSize(window.innerWidth, window.innerHeight)
      cubeRef.current.appendChild(renderer.domElement)

      const starGeo = new THREE.Geometry()
      for (let i = 0; i < 6000; i++) {
        let star = new THREE.Vector3(
          Math.random() * 600 - 300,
          Math.random() * 600 - 300,
          Math.random() * 600 - 300
        )
        starGeo.vertices.push(star)
      }

      animate()
    }

    const animate = () => {
      renderer.render(scene, camera)
      requestAnimationFrame(animate)
    }

    init()
  }, [])

  return <StyledCube ref={cubeRef} />
}

export default SpaceWarp
