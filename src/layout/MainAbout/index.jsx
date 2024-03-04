import AboutBanner from "../../components/AboutBanner";
import DropDown from "../../components/DropDown/index";
import AboutList from "../../datas/AboutList.json";
import "./mainAbout.scss";

const MainAbout = () => {
    return (
        <main className="mainAbout">
            <AboutBanner />
            <section className="mainAbout__Collaspe">
                {AboutList.map((element) => (
                    <DropDown
                        key={element.id}
                        title={element.title}
                        paragraph={element.description}
                    />
                ))}
            </section>
        </main>
    );
};

export default MainAbout;
