import { useEffect, useState } from "react";
import { aTagClick, fatchData } from "../utilits";
import BlogPopUp from "./popup/BlogPopUp";
const News = () => {
  const [data, setData] = useState([]);
  const [popupData, setPopupData] = useState({});
  const [popup, setPopup] = useState(false);
  useEffect(async () => {
    setData(await fatchData("/static/blog.json"));
    aTagClick();
  }, []);
  return (
    <div className="dizme_tm_section" id="blog">
      <BlogPopUp open={popup} data={popupData} close={() => setPopup(false)} />
      <div className="dizme_tm_news">
        <div className="container">
          <div className="dizme_tm_main_title" data-align="center">
            <span>PUBLICATIONS </span>
            <p>{`1**Ahmad Hasan, Muazzam A Khan, Balawal Shabir, Arslan Munir, Asad Waqar Malik, Zahid Anwar and Jawad Ahmad Forensic Analysis of Blackhole Attack in Wireless Sensor Networks/Internet of Things. Applied Sciences, 12(22):11442, 2022
           2**Zillah Adahman, Asad Waqar Malik, and Zahid Anwar. An analysis of zero-trust architecture and its cost-effectiveness for organizational security. Computers & Security, 122:102911, 2022
            3**Asad Waqar Malik, Zahid Anwar, and Anis U Rahman. A novel framework for studying the business impact of ransomware on connected vehicles. IEEE Internet of Things Journal, 2022
            4**Malik, Asad Waqar, and Zahid Anwar "Do Charging Stations Benefit from Cryptojacking? A Novel Framework for Its Financial Impact Analysis on Electric Vehicles." Energies 15, no. 16 (2022): 5773. 2022

            5**Ahmed, Mehreen, Rafia Mumtaz, Zahid Anwar, Arslan Shaukat, Omar Arif, and Faisal Shafait. "A Multi–Step Approach for Optically Active and Inactive Water Quality Parameter Estimation Using Deep Learning and Remote Sensing." Water 14, no. 13 (2022): 2112. 2022
            `}</p>

            
             <span>RESEARCH AND PROFESSIONAL APPOINTMENTS</span>
          </div>
          <div className="news_list">
            <ul>
              {data &&
                data.map((blog, i) => (
                  <li className="wow fadeInUp" data-wow-duration="1s" key={i}>
                    <div className="list_inner">
                      <div className="image">
                        <img src="img/thumbs/42-29.jpg" alt="image" />
                        <div
                          className="main"
                          data-img-url={blog && blog.img}
                          style={{
                            backgroundImage: `url(${blog && blog.img})`,
                          }}
                        />
                        <div className="date">
                          <h3>{blog && blog.date && blog.date.date}</h3>
                          <span>{blog && blog.date && blog.date.month}</span>
                        </div>
                        <a
                          className="dizme_tm_full_link"
                          href="#"
                          onClick={() => {
                            setPopupData(blog && blog);
                            setPopup(true);
                          }}
                        />
                      </div>
                      <div className="details">
                        <span className="category">
                          <a href="#">{blog.category}</a>
                        </span>
                        <h3 className="title">
                          <a href="#">{blog.title}</a>
                        </h3>
                      </div>
                      <div className="news_hidden_details">
                        <div className="news_popup_informations">
                          <div className="text">
                            {blog.details &&
                              blog.details.map((details, i) => (
                                <p key={i}>{details}</p>
                              ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  </li>
                ))}
            </ul>
          </div>
        </div>
        <div className="brush_1 wow zoomIn" data-wow-duration="1s">
          <img src="img/brushes/news/1.png" alt="image" />
        </div>
        <div className="brush_2 wow zoomIn" data-wow-duration="1s">
          <img src="img/brushes/news/2.png" alt="image" />
        </div>
      </div>
    </div>
  );
};
export default News;
