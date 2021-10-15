import * as React from "react";
import { mobileWidth } from "../../constants";
import "./style.css";

export default function ContentWrapper() {
  let element = null;
  const [width, setWidth] = React.useState(window.innerWidth);
  React.useEffect(() => {
    function handleResize() {
      setWidth(window.innerWidth);
    }
    window.addEventListener("resize", handleResize);
  });

  element = width > mobileWidth ? <DesktopContent /> : <MobileContent />;

  return element;
}

function DesktopContent() {
  return (
    <>
      <section id="presentation" class="container heading">
        <h4>
          Welcome to Kami World, a vibrant and enchanted realm! A collection
          1000 Kami's all hand made and created in blender! Explore the
          Kamiverse and enjoy your stay at the Citadel.
        </h4>
        <div class="mintBtn">
          <a class="hero-main-btn clickable" href="/mint">
            <div class="element">
              <div class="text">Mint</div>
            </div>
          </a>
        </div>
      </section>

      <section id="presentation" class="container row">
        <div class="description sr-top-fast" data-sr-id="2">
          <h2>
            <div class="degrade">Omni race</div>The Architect
          </h2>
          <p>
            One of the two most ancient races in the Kamiverse. A mysterious and
            secretive race that prefers isolation.
          </p>
          <p>
            They are masters of the dark arts; their bodily shape allows them to
            shapeshift, enter others' dreams, and plant curses on individuals.
            They aspire to bring their creations into the world regardless of
            the repercussions.
          </p>
        </div>
        <div class="imgRight">
          <img src="images/image1.png" alt="Omni race" />
        </div>
      </section>
      <section id="presentation" class="container row">
        <div class="imgLeft">
          <img src="images/image2.png" alt="Noble race" />
        </div>
        <div class="description sr-top-fast" data-sr-id="2">
          <h2>
            <div class="degrade">Noble race</div>The Pilot
          </h2>
          <p>
            One of the two most ancient races in the Kamiverse. A proud and
            outspoken race that rule over the citadel.
          </p>
          <p>
            They are masters of the divine arts; Their bodily shape permits them
            to tap into psychic powers which allow select Nobles to read minds,
            use telekinesis and access other types of psychic abilities. They’re
            mission is to steer society into their ideal vision.
          </p>
        </div>
      </section>
      <section id="presentation" class="container row">
        <div class="description sr-top-fast" data-sr-id="2">
          <h2>
            <div class="degrade">Voyager race</div>The Traveler
          </h2>
          <p>
            A race genetically created by the Nobles. A loyal and compliant race
            that carries out all infield labor for the species.
          </p>
          <p>
            They are an incredibly durable race. Their bodily shape permits them
            to withstand all extreme physical conditions . They’re mission is to
            explore the universe and return the relics of the cosmos to the
            citadel.
          </p>
        </div>
        <div class="imgRight">
          <img src="images/image3.png" alt="Voyager race" />
        </div>
      </section>
      <section id="presentation" class="container row">
        <div class="imgLeft">
          <img src="images/image4.png" alt="Sentinel race" />
        </div>

        <div class="description sr-top-fast" data-sr-id="2">
          <h2>
            <div class="degrade">Sentinel race</div>The Protector
          </h2>
          <p>
            A race genetically created by the Omni’s. A strong and Obedient race
            that protects the citadel.
          </p>
          <p>
            They are the silent guardians of the species.; Their bodily shape
            grants them immortality at the price of emotion . They’re mission is
            to protect the species and guard the citadel from outside foes
          </p>
        </div>
      </section>
    </>
  );
}

function MobileContent() {
  return (
    <>
      <section id="presentation" class="container heading">
        <h4>
          Welcome to Kami World, a vibrant and enchanted realm! A collection
          1000 Kami's all hand made and created in blender! Explore the
          Kamiverse and enjoy your stay at the Citadel.
        </h4>
        <div class="mintBtn">
          <a class="hero-main-btn clickable" href="/mint">
            <div class="element">
              <div class="text">Mint</div>
            </div>
          </a>
        </div>
      </section>
      <section id="presentation" class="container row">
        <div class="description sr-top-fast" data-sr-id="2">
          <h2>
            <div class="degrade">Omni race</div>The Architect
          </h2>
          <p>
            One of the two most ancient races in the Kamiverse. A mysterious and
            secretive race that prefers isolation.
          </p>
          <p>
            They are masters of the dark arts; their bodily shape allows them to
            shapeshift, enter others' dreams, and plant curses on individuals.
            They aspire to bring their creations into the world regardless of
            the repercussions.
          </p>
        </div>
        <div class="imgCenter">
          <img src="images/image1.png" alt="Omni race" />
        </div>
      </section>
      <section id="presentation" class="container row">
        <div class="description sr-top-fast" data-sr-id="2">
          <h2>
            <div class="degrade">Noble race</div>The Pilot
          </h2>
          <p>
            One of the two most ancient races in the Kamiverse. A proud and
            outspoken race that rule over the citadel.
          </p>
          <p>
            They are masters of the divine arts; Their bodily shape permits them
            to tap into psychic powers which allow select Nobles to read minds,
            use telekinesis and access other types of psychic abilities. They’re
            mission is to steer society into their ideal vision.
          </p>
        </div>
        <div class="imgCenter">
          <img src="images/image2.png" alt="Noble race" />
        </div>
      </section>
      <section id="presentation" class="container row">
        <div class="description sr-top-fast" data-sr-id="2">
          <h2>
            <div class="degrade">Voyager race</div>The Traveler
          </h2>
          <p>
            A race genetically created by the Nobles. A loyal and compliant race
            that carries out all infield labor for the species.
          </p>
          <p>
            They are an incredibly durable race. Their bodily shape permits them
            to withstand all extreme physical conditions . They’re mission is to
            explore the universe and return the relics of the cosmos to the
            citadel.
          </p>
        </div>
        <div class="imgCenter">
          <img src="images/image3.png" alt="Voyager race" />
        </div>
      </section>
      <section id="presentation" class="container row">
        <div class="description sr-top-fast" data-sr-id="2">
          <h2>
            <div class="degrade">Sentinel race</div>The Protector
          </h2>
          <p>
            A race genetically created by the Omni’s. A strong and Obedient race
            that protects the citadel.
          </p>
          <p>
            They are the silent guardians of the species.; Their bodily shape
            grants them immortality at the price of emotion . They’re mission is
            to protect the species and guard the citadel from outside foes
          </p>
        </div>
        <div class="imgCenter">
          <img src="images/image4.png" alt="Sentinel race" />
        </div>
      </section>
    </>
  );
}
