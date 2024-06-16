import Footer from "components/footer/FooterAuthDefault";
import authImg from "assets/img/auth/auth.jpeg";
import { Link, Routes, Route, Navigate } from "react-router-dom";
import routes from "routes.js";
import FixedPlugin from "components/fixedPlugin/FixedPlugin";

export default function Auth() {
  const getRoutes = (routes) => {
    return routes.map((prop, key) => {
      if (prop.layout === "/auth") {
        return (
          <Route path={`/${prop.path}`} element={prop.component} key={key} />
        );
      } else {
        return null;
      }
    });
  };
  document.documentElement.dir = "ltr";
  return (
    <div>
       <header className="bg-white-500 border-b-2 border-gray-300 shadow-md">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3">
         
        <div className="flex max-w-7xl items-center justify-between  gap-3"> 
          {/* Logo */}
          <div className="flex-shrink-0 ">
            <img
              src={authImg}
              alt="Logo"
              className="w-[70px] h-[70px]"
            />
          </div>
          <div>
  <Link to="/" className="text-lg font-medium text-gray-800 hover:text-gray-600">
    <h2 className="text-xl font-bold text-blue-700 hover:text-blue-500">ልደታ ክ/ከተማ</h2>
  </Link>
</div>
</div>
          <nav className="space-x-4 text-gray-700">
            <Link to="/auth/sign-in" className="text-lg font-medium text-blue-700 hover:text-blue-500">
            ይግቡ
            </Link>
             <span> | </span>
            <Link to="/auth/sign-up" className="text-lg font-medium  text-blue-700 hover:text-blue-500">
            ይመዝገቡ
            </Link>
          </nav>
        </div>
      </header>
      <div className="relative float-right h-full min-h-screen w-full">
        {/* <FixedPlugin /> */}
        <main className={`mx-auto min-h-screen`}>
          <div className="relative flex">
            <div className="mx-auto flex min-h-full w-full flex-col justify-start pt-5 md:max-w-[75%] lg:h-screen lg:max-w-[1013px] lg:px-8 lg:pt-0 xl:h-[100vh] xl:max-w-[1383px] xl:px-0 xl:pl-[70px]">
              <div className="mb-auto flex flex-col pl-5 pr-5 md:pr-0 md:pl-12 lg:max-w-[48%] lg:pl-0 xl:max-w-full">
                <Routes>
                  {getRoutes(routes)}
                  <Route
                    path="/"
                    element={<Navigate to="/auth/sign-in" replace />}
                  />
                     <Route
                    path="/sign-up"
                    element={<Navigate to="/auth/sign-up" replace />}
                  />
                </Routes>
                <div className="absolute right-0 hidden h-full min-h-screen md:block md:w-[20vw] lg:w-[20vw] 2xl:w-[35vw]">
  <div
    className="absolute flex h-[350px] w-[350px] justify-center bg-cover bg-center lg:rounded-bl-[200px] xl:rounded-bl-[200px]"
    style={{ backgroundImage: `url(${authImg})` }}
  />
</div>
              </div>
              <Footer />
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
