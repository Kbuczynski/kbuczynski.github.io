import React, { useEffect, useRef } from "react"
import * as THREE from "three"

import { StyledCube } from "./style"

const Cube = () => {
  const cubeRef = useRef()

  useEffect(() => {
    const { innerWidth, innerHeight } = window

    const scene = new THREE.Scene()
    const camera = new THREE.PerspectiveCamera(
      24,
      innerWidth / innerHeight,
      0.1,
      1000
    )
    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true })

    renderer.setSize(innerWidth, innerHeight)
    cubeRef.current.appendChild(renderer.domElement)

    const colorMain = new THREE.Color(`#7d7d7d`)
    const colorLight = new THREE.Color("#e0e0e0")

    const createCube = (size = 2, color = colorMain) => {
      const cubeGeometry = new THREE.BoxGeometry(size, size * 1.5, size)
      const cubeMaterial = new THREE.MeshPhongMaterial({
        color: color,
        shininess: 80,
      })
      cubeGeometry.translate(size / 3, size / 2, size / 2)

      return new THREE.Mesh(cubeGeometry, cubeMaterial)
    }

    const createPointLight = (intensity = 1.5, color = colorLight) =>
      new THREE.PointLight(color, intensity)

    const cube = createCube()
    const cube2 = cube.clone()
    const light = createPointLight()
    const light2 = createPointLight()

    light.position.set(-40, -20, 20)
    light2.position.set(40, 20, 20)

    scene.add(light, light2, cube, cube2)

    camera.position.z = 20

    const handleResize = () => {
      const { innerWidth, innerHeight } = window

      renderer.setSize(innerWidth, innerHeight)
      camera.aspect = innerWidth / innerHeight
      camera.updateProjectionMatrix()
    }

    const cubeMovement = (cube, maxX = 0, isRight = true) => {
      cube.rotation.x += 0.01
      cube.rotation.y -= 0.01

      if (window.scrollY < window.innerHeight) {
        if (isRight) {
          if (cube.position.x > 0) cube.position.x -= 0.01
        } else {
          if (cube.position.x < 0) cube.position.x += 0.01
        }
      } else {
        if (isRight) {
          if (cube.position.x <= maxX) cube.position.x += 0.01
        } else {
          if (cube.position.x >= maxX) cube.position.x -= 0.01
        }
      }
    }

    const animate = () => {
      cubeMovement(cube, 3)
      cubeMovement(cube2, -3, false)
      renderer.render(scene, camera)
      requestAnimationFrame(animate)
    }

    animate()
    window.addEventListener("resize", handleResize)

    return () => {
      window.removeEventListener("resize", handleResize)
    }
  }, [])

  return <StyledCube ref={cubeRef} />
}

export default Cube
