"use client";
import React from 'react';
import styles from '@/styles/Hero.module.css';
import Link from 'next/link';

export default function HeroSection() {
  return (
    <section className={styles.hero}>
      <div className={styles.overlay}>
        <div className={styles.content}>
          <h1>Explora nuestros productos cosmeticos</h1>
          <p>Descubre nuestros productos de calidad</p>
          <Link href="/products" className={styles.btn}>Ver Productos</Link>
        </div>
      </div>
    </section>
  );
}

