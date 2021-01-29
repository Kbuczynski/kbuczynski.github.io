import React, { useEffect, useRef } from "react"
import * as THREE from "three"
import { connect } from "react-redux"

import { StyledCube } from "./style"

const Cube = ({ isDarkMode }) => {
  const cubeRef = useRef()

  useEffect(() => {
    const scene = new THREE.Scene()
    const camera = new THREE.PerspectiveCamera(
      24,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    )

    const renderer = new THREE.WebGLRenderer({ alpha: true })
    renderer.setSize(window.innerWidth, window.innerHeight)
    cubeRef.current.appendChild(renderer.domElement)

    const colorMain = new THREE.Color(`#9e9e9e`)
    const colorLight = new THREE.Color("#fff")

    const cubeGeometry = new THREE.BoxGeometry(4, 5, 3)
    const cubeMaterial = new THREE.MeshPhongMaterial({
      color: colorMain,
      shininess: 80,
    })
    const cube = new THREE.Mesh(cubeGeometry, cubeMaterial)

    const light = new THREE.PointLight(colorLight, 2)
    const light2 = new THREE.PointLight(colorLight, 2)

    light.position.set(-40, -20, 20)
    light2.position.set(40, 20, 10)

    scene.add(light)
    scene.add(light2)
    scene.add(cube)

    camera.position.z = 20

    const animate = () => {
      requestAnimationFrame(animate)

      cube.rotation.x += 0.01
      cube.rotation.y -= 0.01

      renderer.render(scene, camera)
    }

    animate()
  }, [isDarkMode])

  return <StyledCube ref={cubeRef} />
}

export default connect(
  state => ({
    isDarkMode: state.app.isDarkMode,
  }),
  null
)(Cube)
