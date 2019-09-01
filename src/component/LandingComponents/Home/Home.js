import React from "react";
import { Route } from "react-router-dom";
import Banner from "./Banner/Banner";
import ContactUs from "./ContactUs/ContactUs";
import ContactData from "./ContactData/ContactData";
import Facilities from "./Facilities/Facilities";
import Ide from "./Ide/Ide";
import Chat from "./Chat/Chat";
import Packages from "./Packages/Packages";

class Home extends React.Component {
  contactRef = React.createRef();
  cancelRef = React.createRef();

  contactClickHandler = () => {
    this.props.history.replace("/contact");
    setTimeout(() => {
      this.contactRef.current.scrollIntoView({
        behavior: "smooth"
      });
    }, 10);
  };

  contactCancelHandler = () => {
    this.cancelRef.current.scrollIntoView({
      behavior: "smooth"
    });
    this.props.history.replace("/");
  };

  render() {
    return (
      <div>
        <Banner />
        <div ref={this.cancelRef}>
          {/* <ContactUs clicked={this.contactClickHandler} /> */}
          <ContactUs />
        </div>
        <Facilities />
        <Ide />
        <Chat />
        <Packages />
        {/* <div ref={this.contactRef}>
                    <Route
                        path={'/contact'}
                        render={(props) => (
                            <ContactData {...props}
                                canceled={this.contactCancelHandler}
                            />
                        )}
                    />
                </div> */}
      </div>
    );
  }
}

export default Home;
