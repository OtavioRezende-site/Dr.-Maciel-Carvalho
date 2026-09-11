import { useEffect, useRef } from "react";
import * as THREE from "three";

export default function ThreeBackground() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    const container = containerRef.current;
    let cleanupFn: (() => void) | undefined;

    try {
      // Create Scene, Camera, Renderer
      const scene = new THREE.Scene();
      scene.fog = new THREE.FogExp2(0x0a0a0c, 0.015);

      const camera = new THREE.PerspectiveCamera(
        60,
        container.clientWidth / container.clientHeight,
        0.1,
        1000
      );
      camera.position.z = 25;

      const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true, powerPreference: "default" });
      renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
      renderer.setSize(container.clientWidth, container.clientHeight);
      container.appendChild(renderer.domElement);

    // Create 3D Lights
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.2);
    scene.add(ambientLight);

    const pointLight1 = new THREE.PointLight(0xd4af37, 2, 100);
    pointLight1.position.set(10, 10, 10);
    scene.add(pointLight1);

    const pointLight2 = new THREE.PointLight(0xaa7c11, 1.5, 100);
    pointLight2.position.set(-10, -10, 10);
    scene.add(pointLight2);

    // Create 3D Rotating Particles (Golden Digital Dust)
    const particleCount = 200;
    const geometry = new THREE.BufferGeometry();
    const positions = new Float32Array(particleCount * 3);
    const colors = new Float32Array(particleCount * 3);

    const goldColor = new THREE.Color(0xd4af37);
    const bronzeColor = new THREE.Color(0x8a6623);

    for (let i = 0; i < particleCount; i++) {
      // Spread coordinates across a spacious volume
      positions[i * 3] = (Math.random() - 0.5) * 50;
      positions[i * 3 + 1] = (Math.random() - 0.5) * 50;
      positions[i * 3 + 2] = (Math.random() - 0.5) * 50;

      // Random elegant gold/bronze color mix
      const mixedColor = new THREE.Color().lerpColors(
        goldColor,
        bronzeColor,
        Math.random()
      );
      colors[i * 3] = mixedColor.r;
      colors[i * 3 + 1] = mixedColor.g;
      colors[i * 3 + 2] = mixedColor.b;
    }

    geometry.setAttribute("position", new THREE.BufferAttribute(positions, 3));
    geometry.setAttribute("color", new THREE.BufferAttribute(colors, 3));

    // Create custom smooth round particle texture
    const canvas = document.createElement("canvas");
    canvas.width = 16;
    canvas.height = 16;
    const ctx = canvas.getContext("2d");
    if (ctx) {
      const gradient = ctx.createRadialGradient(8, 8, 0, 8, 8, 8);
      gradient.addColorStop(0, "rgba(255, 255, 255, 1)");
      gradient.addColorStop(1, "rgba(255, 255, 255, 0)");
      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, 16, 16);
    }
    const particleTexture = new THREE.CanvasTexture(canvas);

    const material = new THREE.PointsMaterial({
      size: 0.35,
      vertexColors: true,
      transparent: true,
      opacity: 0.8,
      map: particleTexture,
      blending: THREE.AdditiveBlending,
      depthWrite: false,
    });

    const starParticles = new THREE.Points(geometry, material);
    scene.add(starParticles);

    // Create elegant wireframe abstract legal jewel (represents truth & balance)
    let meshGroup = new THREE.Group();

    // Upper octahedron wireframe
    const geoOcta = new THREE.OctahedronGeometry(4, 1);
    const matOcta = new THREE.MeshPhongMaterial({
      color: 0xd4af37,
      wireframe: true,
      transparent: true,
      opacity: 0.25,
      shininess: 100,
    });
    const wireframeOcta = new THREE.Mesh(geoOcta, matOcta);
    meshGroup.add(wireframeOcta);

    // Inner small solid solid crystal core
    const geoCore = new THREE.IcosahedronGeometry(1.2, 0);
    const matCore = new THREE.MeshPhongMaterial({
      color: 0xffffff,
      emissive: 0xd4af37,
      emissiveIntensity: 0.4,
      transparent: true,
      opacity: 0.7,
      shininess: 200,
      flatShading: true,
    });
    const coreMesh = new THREE.Mesh(geoCore, matCore);
    meshGroup.add(coreMesh);

    // Surrounding elegant gold orbits (rings representing systemic order / law courts)
    const ringGroup = new THREE.Group();
    const ringCount = 2;
    for (let i = 0; i < ringCount; i++) {
      const ringGeo = new THREE.RingGeometry(5.5, 5.6, 64);
      const ringMat = new THREE.MeshBasicMaterial({
        color: 0xd4af37,
        side: THREE.DoubleSide,
        transparent: true,
        opacity: 0.15 + i * 0.1,
      });
      const ring = new THREE.Mesh(ringGeo, ringMat);
      ring.rotation.x = Math.random() * Math.PI;
      ring.rotation.y = Math.random() * Math.PI;
      ringGroup.add(ring);
    }
    meshGroup.add(ringGroup);

    scene.add(meshGroup);

    // Handle mouse move tracking
    let targetX = 0;
    let targetY = 0;
    let currentX = 0;
    let currentY = 0;

    const handleMouseMove = (event: MouseEvent) => {
      // Calculate normalized mouse positions (-1 to 1)
      targetX = (event.clientX / window.innerWidth - 0.5) * 2;
      targetY = (event.clientY / window.innerHeight - 0.5) * 2;
    };

    window.addEventListener("mousemove", handleMouseMove);

    // Handle window scroll adjustments (zooms or moves scene)
    let targetScroll = 0;
    const handleScroll = () => {
      const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
      if (maxScroll > 0) {
        targetScroll = window.scrollY / maxScroll;
      }
    };

    window.addEventListener("scroll", handleScroll);

    // Handle resize
    const handleResize = () => {
      if (!container) return;
      camera.aspect = container.clientWidth / container.clientHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(container.clientWidth, container.clientHeight);
    };

    window.addEventListener("resize", handleResize);

    // Animation Loop
    let animationId: number;
    const clock = new THREE.Clock();

    const animate = () => {
      animationId = requestAnimationFrame(animate);

      const elapsedTime = clock.getElapsedTime();

      // Slow dynamic rotations
      starParticles.rotation.y = elapsedTime * 0.015;
      starParticles.rotation.x = elapsedTime * 0.008;

      meshGroup.rotation.y = elapsedTime * 0.15;
      meshGroup.rotation.x = elapsedTime * 0.08;
      ringGroup.rotation.z = -elapsedTime * 0.3;

      // Soft breathing effect on the inner crystal
      const wave = Math.sin(elapsedTime * 2) * 0.15 + 1.0;
      coreMesh.scale.set(wave, wave, wave);

      // Smooth mouse camera interpolation (Easing / Lerp)
      currentX += (targetX - currentX) * 0.05;
      currentY += (targetY - currentY) * 0.05;

      camera.position.x = currentX * 6;
      camera.position.y = -currentY * 6;

      // Scroll response: translate group along depth or adjust vertical angle
      meshGroup.position.z = targetScroll * -8;
      meshGroup.position.y = -targetScroll * 6;

      camera.lookAt(meshGroup.position);

      renderer.render(scene, camera);
    };

    animate();

      cleanupFn = () => {
        window.removeEventListener("mousemove", handleMouseMove);
        window.removeEventListener("scroll", handleScroll);
        window.removeEventListener("resize", handleResize);
        cancelAnimationFrame(animationId);
        if (container.contains(renderer.domElement)) {
          container.removeChild(renderer.domElement);
        }
        scene.clear();
        renderer.dispose();
      };
    } catch (err) {
      console.warn("ThreeBackground: WebGL could not be initialized, falling back to CSS luxury dark canvas.", err);
    }

    return () => {
      if (cleanupFn) {
        cleanupFn();
      }
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="fixed inset-0 w-full h-full pointer-events-none -z-20 overflow-hidden"
      id="3d-canvas-container"
    />
  );
}
