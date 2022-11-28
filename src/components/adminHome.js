const AdminHome = (props) => {
    return (
      <section className="sectn">
          <div className="cards">
            <div className="hdr"><h1>Digital Library</h1></div>
            <div className="bkgc1">
        <div className="card1">
          <h1>EBooks </h1> <hr />
          <h2>OverDrive</h2>
          <p>
            Download thousands of eBooks directly to your device, including the
            hard-to-get ebook Express Collection. Check out up to 20 items and
            hold up to 15 items.
          </p>
          <h2>Hoopla Comics</h2>
          <p>
            Download comics from Marvel, DC, Fantagraphics, Image, and more via
            Hoopla. Take out each comic for up to 21 days.
          </p>
        </div>
        </div>
        <div className="bkgc2">
        <div className='card2'>
          <h1>Digital Learning</h1> <hr />
          <p>
            LinkedIn Learning (formerly Lynda) is an online educational site that
            features thousands of courses and video tutorials where you can
            discover, complete, and track courses related to your field and
            interests.
          </p>
        </div>
        </div>
        <div className="bkgc3">
        <div className='card3'>
          <h1>Magazines</h1> <hr />
          <p>
            For your convenience, thousands of magazines are available now to
            borrow through OverDrive and Libby. This includes hot titles like The
            Economist and Bon Appetit. (Formerly available through RBdigital.)
          </p>
        </div>
        </div>
        <div className="bkgc4">
        <div className='card4'>
          <h1>Newspapers</h1> <hr />
          <p>
            Enjoy complimentary digital access to The New York Times online when
            you're at the Library.
          </p>
          <p>*  Access the New York Times *In Library access only</p>
          <p>
            Enjoy complimentary digital access to The Wall Street Journal online
            when you're at the Main Library.
          </p>
          <p>
            * Access the Wall Street Journal *Main Library computer access only
          </p>
          <p>
            Enjoy complimentary digital access to PressReader with over 3,500
            newspapers in over 60 languages. Download the Apple app or Android
            app.
          </p>
          <p> * Access PressReader *Library Card and PIN required.</p>
        </div>
        </div>
        </div>
      </section>
    );
  };
  
  export default AdminHome;