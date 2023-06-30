import { Link } from "react-router-dom";
import Header from "./Header";
import "./Header.css";
import "./Home.css";
import Product from "./Product";
import "./Product.css";
const Home = () => {
  return (
    <div className="home">
      <Header />
      <div className="home__imgFade">
        <img
          src="https://vertexbazaar.com/wp-content/uploads/2022/04/amazon-prime-video-banner.jpg"
          alt="Banner_Image"
          className="banner__img"
        />
        <div className="product__fadeBottom"></div>
        <div className="home__row">
          <Product
            id="12321341"
            title="2020 Apple Watch with Bluetooth and Airpod connectivity, E-sim and Physical sim with WIFI  access "
            price={80}
            rating={4}
            image="https://assets.entrepreneur.com/content/3x2/2000/20171212213121-apple-website.jpeg"
          />

          <Product
            id="9383341"
            title="Solar powered Sony Camera for photo journalism"
            price={2300}
            rating={5}
            image="https://solaroidenergy.com/wp-content/uploads/2023/02/best-sony-camera-for-photojournalism-2.jpg"
          />
        </div>
        <div className="home__row">
          <Product
            id="484326471"
            title="Ultimate Sneakers "
            price={50}
            rating={3}
            image="https://i0.wp.com/digital-photography-school.com/wp-content/uploads/2019/11/product_photography_tips_4.jpg?resize=1500%2C1001&ssl=1"
          />
          <Product
            id="18373874"
            title="2023 iPhone 15 with 6G network with single or doble sim and E-sim "
            price={2000}
            rating={5}
            image="https://imageio.forbes.com/specials-images/imageserve/641397e79f04500b85460b8f/Apple--iPhone-15--iPhone-15-Pro-Max--iPhone-15-Pro--iPhone-15-Pro-design--iPhone-15/0x0.jpg?format=jpg&crop=924,693,x368,y0,safe&width=960"
          />
          <Product
            id="18373748"
            title="Haier Thermocool 25 litres Digital Microwave Oven + Grill D90D25EL-QF Silver"
            price={200}
            rating={3}
            image="https://uandu.com.ng/wp-content/uploads/2022/09/D90D25EL-QF.jpg"
          />
        </div>
        <div className="home__row">
          <Product
            id="93748448"
            title="Next generation wireless magnetic Displace TV with indepenedent battery capacity"
            price={3000}
            rating={5}
            image="https://cdn.vox-cdn.com/thumbor/pE6ERrkvmzaSct88Y-WhOImcZNw=/0x0:2040x1360/2040x1360/filters:focal(1020x680:1021x681)/cdn.vox-cdn.com/uploads/chorus_asset/file/24347492/DSCF1113.jpg"
          />
          <Product
            id="93768448"
            title="British made Male Classic Senator with the finest Italian fabrics"
            price={100}
            rating={4}
            image="https://www.kwiberry.com/pohojar/2022/08/photo_5999091696807295798_x.jpg"
          />
        </div>
        <div className="home__row">
          <Product
            id="9328448"
            title="Newest generation Samsung Air Conditioner with humidifier"
            price={600}
            rating={5}
            image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR6_b2TeZwdGKA4j2BHDuSBY0PobxdJl7DHgg&usqp=CAU"
          />
          <Product
            id="93723448"
            title="Latest release Tecno Camon 20, 5G network and 200MP camera"
            price={400}
            rating={5}
            image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ93OCaKWhtICtaWcdsGr3d5L4nfNEJP-_KnAwoX9Eoyz9CYx99W27AuN1vYE-3jj7Hy6o&usqp=CAU"
          />
          <Product
            id="93740248"
            title="15000 bulb modern day multi light chandelier with in-built speakers"
            price={1200}
            rating={4}
            image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQmzJ3-2iUH09Umet6E_6MQ-pMy_p0R_ObGiw&usqp=CAU"
          />
        </div>
        <div className="home__row">
        <Product
            id="93792448"
            title="500 ltr polystar chest deep freezer. 72 hours frost without electricity"
            price={1000}
            rating={5}
            image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTNovo9EggurJjiaS7AUj5iZxd4sUvfeDG3Qw&usqp=CAU"
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
