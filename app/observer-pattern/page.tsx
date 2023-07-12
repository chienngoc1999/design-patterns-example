"use client"
import React, { useEffect } from 'react';
// định nghĩa interface Subject và interface Observer
interface Subject {
    attach(observer: Observer): void;
    detach(observer: Observer): void;
    notify(): void;
  }
  
  interface Observer {
    update(): void;
  }
  
// tạo một class ConcreteSubject cụ thể triển khai interface Subject:

class ConcreteSubject implements Subject {
    private observers: Observer[] = [];
  
    attach(observer: Observer) {
      this.observers.push(observer);
    }
  
    detach(observer: Observer) {
      const index = this.observers.indexOf(observer);
      if (index !== -1) {
        this.observers.splice(index, 1);
      }
    }
  
    notify() {
      for (const observer of this.observers) {
        observer.update();
      }
    }
  }

  // tạo các lớp ConcreteObserver cụ thể triển khai interface Observer

  class ConcreteObserverA implements Observer {
    update() {
      console.log('ConcreteObserverA đã được thông báo');
    }
  }
  
  class ConcreteObserverB implements Observer {
    update() {
      console.log('ConcreteObserverB đã được thông báo');
    }
  }

  const HomePage: React.FC = () => {
    useEffect(() => {
      const subject = new ConcreteSubject();
      const observerA = new ConcreteObserverA();
      const observerB = new ConcreteObserverB();
  
      subject.attach(observerA);
      subject.attach(observerB);
  
      subject.notify();
  
      subject.detach(observerA);
  
      subject.notify();
    }, []);
  
    return (
      <div>
        {/* Render component */}
      </div>
    );
  };
  
  export default HomePage;