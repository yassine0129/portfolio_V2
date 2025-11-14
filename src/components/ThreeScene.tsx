import { useEffect, useRef } from 'react';
import * as THREE from 'three';

interface ThreeSceneProps {
  onSceneReady?: (scene: THREE.Scene, camera: THREE.Camera, renderer: THREE.Renderer) => void;
}

export const ThreeScene = ({ onSceneReady }: ThreeSceneProps) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const sceneRef = useRef<THREE.Scene | null>(null);
  const cameraRef = useRef<THREE.PerspectiveCamera | null>(null);
  const rendererRef = useRef<THREE.WebGLRenderer | null>(null);
  const animationFrameRef = useRef<number>();

  useEffect(() => {
    if (!containerRef.current) return;

    const width = containerRef.current.clientWidth;
    const height = containerRef.current.clientHeight;

    const scene = new THREE.Scene();
    scene.background = new THREE.Color(0x000a1f);
    sceneRef.current = scene;

    const camera = new THREE.PerspectiveCamera(75, width / height, 0.1, 1000);
    camera.position.z = 5;
    cameraRef.current = camera;

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(width, height);
    renderer.setPixelRatio(window.devicePixelRatio);
    renderer.shadowMap.enabled = true;
    containerRef.current.appendChild(renderer.domElement);
    rendererRef.current = renderer;

    const light1 = new THREE.DirectionalLight(0x3b82f6, 0.8);
    light1.position.set(5, 5, 5);
    light1.castShadow = true;
    scene.add(light1);

    const light2 = new THREE.DirectionalLight(0x1e40af, 0.4);
    light2.position.set(-5, -5, 5);
    scene.add(light2);

    const ambientLight = new THREE.AmbientLight(0xffffff, 0.3);
    scene.add(ambientLight);

    const geometries: { mesh: THREE.Mesh; rotationX: number; rotationY: number; rotationZ: number }[] = [];

    for (let i = 0; i < 20; i++) {
      const geometry = new THREE.IcosahedronGeometry(0.5, 2);
      const material = new THREE.MeshPhongMaterial({
        color: Math.random() > 0.5 ? 0x3b82f6 : 0x1e40af,
        emissive: Math.random() > 0.5 ? 0x0ea5e9 : 0x06b6d4,
        shininess: 100,
      });

      const mesh = new THREE.Mesh(geometry, material);
      mesh.position.set(
        (Math.random() - 0.5) * 20,
        (Math.random() - 0.5) * 20,
        (Math.random() - 0.5) * 20
      );
      mesh.castShadow = true;
      mesh.receiveShadow = true;

      scene.add(mesh);

      geometries.push({
        mesh,
        rotationX: Math.random() * 0.02,
        rotationY: Math.random() * 0.02,
        rotationZ: Math.random() * 0.02,
      });
    }

    const particles = new THREE.BufferGeometry();
    const particleCount = 1000;
    const positions = new Float32Array(particleCount * 3);

    for (let i = 0; i < particleCount * 3; i++) {
      positions[i] = (Math.random() - 0.5) * 100;
    }

    particles.setAttribute('position', new THREE.BufferAttribute(positions, 3));

    const particleMaterial = new THREE.PointsMaterial({
      color: 0x0ea5e9,
      size: 0.1,
      sizeAttenuation: true,
      transparent: true,
      opacity: 0.6,
    });

    const particleSystem = new THREE.Points(particles, particleMaterial);
    scene.add(particleSystem);

    if (onSceneReady) {
      onSceneReady(scene, camera, renderer);
    }

    const handleResize = () => {
      if (!containerRef.current) return;
      const newWidth = containerRef.current.clientWidth;
      const newHeight = containerRef.current.clientHeight;

      camera.aspect = newWidth / newHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(newWidth, newHeight);
    };

    window.addEventListener('resize', handleResize);

    const animate = () => {
      animationFrameRef.current = requestAnimationFrame(animate);

      geometries.forEach((item) => {
        item.mesh.rotation.x += item.rotationX;
        item.mesh.rotation.y += item.rotationY;
        item.mesh.rotation.z += item.rotationZ;
      });

      particleSystem.rotation.y += 0.0002;

      renderer.render(scene, camera);
    };

    animate();

    return () => {
      window.removeEventListener('resize', handleResize);
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
      containerRef.current?.removeChild(renderer.domElement);
      renderer.dispose();
    };
  }, [onSceneReady]);

  return <div ref={containerRef} className="w-full h-full" />;
};
