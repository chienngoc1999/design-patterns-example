"use client"
import React, { useEffect } from "react"

// Định nghĩa interface Product
interface Product {
  operation(): void
}

// Define the ConcreteProductA class implementing the Product interface
class ConcreteProductA implements Product {
  public operation() {
    console.log("ConcreteProductA operation")
  }
}

// Define the ConcreteProductB class implementing the Product interface
class ConcreteProductB implements Product {
  public operation() {
    console.log("ConcreteProductB operation")
  }
}

// Define the Creator abstract class with a factoryMethod
abstract class Creator {
  abstract factoryMethod(): Product

  public someOperation() {
    const product = this.factoryMethod()
    product.operation()
  }
}

// Define the ConcreteCreatorA class extending Creator and implementing the factoryMethod
class ConcreteCreatorA extends Creator {
  public factoryMethod(): Product {
    return new ConcreteProductA()
  }
}

// Define the ConcreteCreatorB class extending Creator and implementing the factoryMethod
class ConcreteCreatorB extends Creator {
  public factoryMethod(): Product {
    return new ConcreteProductB()
  }
}

const HomePage: React.FC = () => {
  useEffect(() => {
    const creatorA = new ConcreteCreatorA()
    const creatorB = new ConcreteCreatorB()

    creatorA.someOperation()
    creatorB.someOperation()
  }, [])

  return <div>{/* Render component */}</div>
}

export default HomePage
