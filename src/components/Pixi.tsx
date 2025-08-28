// 'use client';
// import { useEffect, useRef } from 'react';
// import * as PIXI from 'pixi.js';

// export default function Pixi() {
//   const gameContainer = useRef<HTMLDivElement>(null);

//   useEffect(() => {
//     if (!gameContainer.current) return;

//     let app: PIXI.Application | null = null;
//     let enemyInterval: NodeJS.Timeout;

//     const keyDown = (e: KeyboardEvent) => (keys[e.code] = true);
//     const keyUp = (e: KeyboardEvent) => (keys[e.code] = false);
//     const keys: Record<string, boolean> = {};

//     (async () => {
//       app = new PIXI.Application();
//       await app.init({
//         width: 800,
//         height: 600,
//         background: '#000000',
//       });

//       // ✅ append canvas once app is initialized
//       if (gameContainer.current) {
//         gameContainer.current.innerHTML = ''; // clear old canvas if any
//         gameContainer.current.appendChild(app.canvas);
//       }

//       // Spaceship
//       const spaceship = PIXI.Sprite.from(
//         'https://pixijs.io/examples/examples/assets/bunny.png'
//       );
//       spaceship.anchor.set(0.5);
//       spaceship.x = app.renderer.width / 2;
//       spaceship.y = app.renderer.height - 50;
//       app.stage.addChild(spaceship);

//       let bullets: PIXI.Graphics[] = [];
//       let enemies: PIXI.Sprite[] = [];

//       window.addEventListener('keydown', keyDown);
//       window.addEventListener('keyup', keyUp);

//       // Fire bullets
//       function fireBullet() {
//         const bullet = new PIXI.Graphics();
//         bullet.beginFill(0xffffff);
//         bullet.drawRect(0, 0, 4, 12);
//         bullet.endFill();
//         bullet.x = spaceship.x;
//         bullet.y = spaceship.y - 20;
//         app!.stage.addChild(bullet);
//         bullets.push(bullet);
//       }

//       // Spawn enemies
//       function spawnEnemy() {
//         const enemy = PIXI.Sprite.from(
//           'https://pixijs.io/examples/examples/assets/bunny.png'
//         );
//         enemy.tint = 0xff0000;
//         enemy.anchor.set(0.5);
//         enemy.x = Math.random() * app!.renderer.width;
//         enemy.y = -20;
//         app!.stage.addChild(enemy);
//         enemies.push(enemy);
//       }
//       enemyInterval = setInterval(spawnEnemy, 1500);

//       // Game loop
//       app.ticker.add(() => {
//         if (keys['ArrowLeft'] && spaceship.x > 20) spaceship.x -= 5;
//         if (keys['ArrowRight'] && spaceship.x < app!.renderer.width - 20)
//           spaceship.x += 5;

//         if (keys['Space']) {
//           if (
//             !(spaceship as any).lastShot ||
//             Date.now() - (spaceship as any).lastShot > 300
//           ) {
//             fireBullet();
//             (spaceship as any).lastShot = Date.now();
//           }
//         }

//         // Move bullets
//         bullets = bullets.filter((bullet) => {
//           bullet.y -= 8;
//           if (bullet.y < 0) {
//             app!.stage.removeChild(bullet);
//             return false;
//           }
//           return true;
//         });

//         // Move enemies
//         enemies = enemies.filter((enemy) => {
//           enemy.y += 2;
//           if (enemy.y > app!.renderer.height) {
//             app!.stage.removeChild(enemy);
//             return false;
//           }

//           // Collision detection
//           bullets.forEach((bullet, bi) => {
//             const dx = bullet.x - enemy.x;
//             const dy = bullet.y - enemy.y;
//             const distance = Math.sqrt(dx * dx + dy * dy);

//             if (distance < 20) {
//               app!.stage.removeChild(enemy);
//               app!.stage.removeChild(bullet);
//               bullets.splice(bi, 1);
//               return false;
//             }
//           });
//           return true;
//         });
//       });
//     })();

//     // Cleanup
//     return () => {
//       clearInterval(enemyInterval);
//       window.removeEventListener('keydown', keyDown);
//       window.removeEventListener('keyup', keyUp);
//       if (app) {
//         app.destroy(true, { children: true });
//         if (gameContainer.current?.contains(app.canvas)) {
//           gameContainer.current.removeChild(app.canvas);
//         }
//       }
//     };
//   }, []);

//   return <div ref={gameContainer} />;
// }
