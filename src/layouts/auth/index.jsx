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
              src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxMTEhUSEhIWFhUXFxgXGBYXFxUWGBgXFRYWGxgXGBUYHSghGh4lHhYXITEhJSkrLi4uGB8zODMsNygtLisBCgoKDg0OGxAQGy0lICYuLS0rLS0tLS0tMC0tLS0tLS0vKy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLf/AABEIAOEA4QMBIgACEQEDEQH/xAAcAAABBQEBAQAAAAAAAAAAAAAAAQQFBgcDAgj/xABDEAACAQMCAwUFBQYEBQQDAAABAgMABBESIQUGMRMiQVFhBzJxgZEUI1KhsQhCYnKCwTOS0fAkQ7LC8VNjouEVFjT/xAAaAQEAAwEBAQAAAAAAAAAAAAAAAgMEAQYF/8QAMBEAAgIBBAIBAgQEBwAAAAAAAAECAxEEEiExE0FRBSIyYYHwBkJxwRQzUpGhsdH/2gAMAwEAAhEDEQA/ANxooooAooooAooooAooooAoozXC7u44lLyOqKOrMwUD5k4oDvRVL4l7SrNDpi13DeUa93/O2AflmoLivP8AfhVdbRLdGdY1eXW2Wc4UbBcfpViqk+SO5Go0VkfHuKcRhUtdcQSHCGQxwx9o4jBAL6UQkLkgaiQN+tRVzfSiGWWTiN3rimWAwhtLNK+NIUrIV0kHOQdq74l7kjm/8jcaKyK05bvzOYpL2ZEEYYTLctIpfIBj0lgwI3OcYOKlhy3xFf8AC4sxPhqJb8mJrviXyc3v4NHorJI+ZuIR+7fWc4DFMO0SEsvvKMlMkeXrUpD7Rp4//wCqxYL+OJgy/nt/8q54ZeuTu9ezR6KrfB+d7K4IVZwjHokn3bE+Q1bN8iasYNVuLj2STT6Fooorh0KKKKAKKKKAKKKKAKKKKAKKKKAKKKKAKKKTNALTTiXEYoEMk0iog8WOPkPM+gqtc5c9w2YKLiSYAnTnuoMdZGHT+XqfTrWeWDNf3DtfyuJIgG7FlKdx/daNegTwyN/Orq6XLmXCISnjos/E/aFNOTHw+E4AOZnXoB1ITw/q+lVHhy/abiFuJSs63EPbwP2moHHvRsuB2bAEHC7VYOKOTEILU9ioZSxUDvID3kPj3ht1qu8L5RuXHYDKiCcSW0nvfducshUHIxqI3wK0OOz8Kx+ZUpJ9sbxce+z3NxLZOpUTMi2jqHMkcCKJXV+sbZ1EAbHB6055p5kkvTa6CXtpBNlVTtBrMWEDpg94ZOARsd6vvA/Z3HGzyHZndnOTq0l8atI6LnAz4nAz0qy2XLNvGMBNvLoP8q4FUylH2yaz6RkfCOCu0EH2lAZI4hH3u8QuchD4EDbak4Py3Iyzi4TPaXLy4JDAjI0N3TttW3RWUa+7Go+QrsFp5l8DZL5MW4DwS5iRxKzZaV2XvM2EONIBPTbwpxfSywhSBK5ZgoWMFjk+J3AAGNyTWxYrw8KnqoPxANdWpwsYOOpt5yYpHa3H2mKYqEjgV+zXubyS7M+lCVHd8eu9JBxeSKaLh9uOxt4w08wQAkh2OIwzA6QWJJxvjpithn4PC3WMD4bfpVe4xyDBNqYZDsugsCVfT5a1Izj1zTyQfobZopBsrE6xeTqO1l+5YqsbKCCezYr75/ib0rlwS/u4ZJxw+driG3dVbV34mJXJWM56jodJGNuualeP8rTw25W3TVKiBYmYjrgDVrP72N8nG+KgeVrVYtDW7Sr2JeOQHKCSQgazIv7+Cdiemau7eFyiOeMsv/L3tFgmIiuB9nl6d8/dsfRzjT8Gx86uoNZNxt7SaMvdFYiB/i9PkfPPlUfwHmmexOFf7Ta7d3cMitupXWAyZG4DDSfCq56dfy9/BKNj9m1UVG8C43DdxiWF9Q6EdGU/hZeoNSVZWsdlyeQooorgCiiigCiiigCiiigCiiigENZ5zxzuysbSyOqX3XkG+g/hTzf16D1NdPaJze0ebO2P3rD7xx/ywf3Vx++fyG/XFZtwx7u1lELQwvO6M0TayAQjDVnyOknA8+taK60lun+hVKWeEN7N1SJZ7giW3uVeKRgCHtpWyp1knfckFj44Plmbi4Fdyi3kaRDcQNoD97EsBOCHAGckb+O/xrryzy89zLJJ2TRRTaluLWVDhpB/zI2B2B8Wx/bGt8D4FHboqoo7oAGOgAGwFTlPHZHDfESJ4RyvsDJsPwjr8/KrNb2yIMIoA9K6ilrPOyU+yyFaj0JRmg1GQSlZmQ9G3HxxWS7UKpxT9vBbGOckpRQKK0EQooozQBSUtMr+60FQOrMB8s71VbbGqO6R1LI8IzUVxDgSPkr3T+X0qVFLV0ZNcohKKfDMo5t5QaRo2yA0RZkDqWjZiuFLKCCcHBH6VS4LF7dxLdgpGhMtzO5VpLmRgVEShCT2W+ynHhsMbfQ1xArjDDIqqcc4EMEEBkPmAfkwrTCam+eyiSlBfKMvtuKG2mS4tDJF2mdKTLo7VRuRpydQ328R4VsXKfM8V7FqXuyLgSRnqp8/VT4GsT4tY6ri5jhBZz3Z7uf3LaMgHsoc472N8jzG/jT6W6FnNDPazrllyneB1r0OoeKk/nU3Dyrns6pbeujfKKh+V+Px3kAlTY+66Hqjjqp9PEHxBFTFY2mnhl6eQooorh0KKKKAKKKKAKrPPnM62VuWBHav3YwTtk/vH0GfmSB41Yp5QqlmIAUEknoABkk1h3GLgcUuXd8GP3UU4OhBnSSPBj73z9Kupr3yK7JYQnKxjkd5O1WSUHLd4M2ondm+JqxNy4LqSF2Lh4pNaFDgnI3UnHunbPwqrcO4O8siQTQvBcRL91eW4AR0TA7x8z0Knz8OlbVwbh4jUE+8R+VabLvt5RQq3u4Z34dYLEuB18T/AL8KdiilrA3nlmpJLoKKQGlodCo/iMHeVwN1Iz8KeCYaivjjPyNe8VRdXG6O398Ek3F5AVwhnJZ1P7pH0I/804ptHCRIzeDAfUZqU9yccfPJwc0x4hcFSgHiwz8P9mn1RnEU1SxD1z9MH+1Ua+U41fZ3lL/klWk5ckkKi5kLzjyUZNSgrwsIBJHU9alqKPMop9Jpv9DkZYPYpaTNLWoiFeXQEYPQ16ooCl818KdYpDBGjuVOlXOFY46MceXn5YrNf/1R0mX7RmXtVYTNG3YxxBCrIiouMqTnY9cZ+O9TRBgQfGqDzzayLEyxWwuGYhNBYKul9tTZ/dG2cf6mtNc1L8RlnFwfHTKTw7jT8Nv0KkGKRSWAbd1zkYXzAJIPjgitytLlZEWRGDKwDKw6EEbGvnp+XJTIsdw5z2MhjSFCIYRlcr2jAnOcEb7FfUVfvZTxkxk2EjEgAtCWOTtu6Z8fxD+ryqV0HNb8FkJRXGTTaKKKyFwUUUUAUUUGgKL7U+LlIVtUOGnPex4RL73+Y4Hw1Vk/B+DzrK0CvHDJLGJI5EYhnMDErqQ7bk97zA8d6ludOPySX00qwPLGndVlxgRxE68Dz2cjzJFS/KCXUzwzP9kkgKlleMP2qEqRpGds5OD862xUYwS9meUny/RauQOCyANNcahJKQ7x6tUcbAYCxr0AxufX4VesU3sINCAePj8ac1kseWWwjhcjOK975Rhg+HkRTsU1vrMOPJh0NLYM+nDjcbZ8/WsNU7Y2OufK9P8Asy5pYyjhfIyN2if1DzHnTq1uA65FdiK4RWgViy7Z6jwz50VNkLd0X9r7X/hzKawceIRnaReq/mPEU8jbIB86XFKBV8Kts3JezmeDgJe+V9AR+hrvUdxJ9Dxv66T8DT55ABknAqMLVulGXr/o61wj3XgxDIbxG31rlDeIxwrAmuuvfHpmpqcJrKaZxpo90jUtIwztU30cGdiSzNIeh2X4Dx+Zp27ADJpFQAYHhTHiAZz2a7Dqx9PKss5Soq45f9yS5Z7sroyMxAwg2HqafVxtoQihRXK+vBGPXwFITdNO6589s61uliI6zTPiVtqXPiK8cOVz33PXovgB8KfmrtPc5xU8YK7IJ5iyh8RtfKqRxaN4JVmj2ZGDqfUH9D0+tXb2i8OQwlpJp4ooz2jiA4aRemjYZ6kdPX4jN7LgMrSdv2c1vAo7kMsryO7Ee+6knQMH3a+tC7LxjsxKtJZybzwfiC3EEcye66hgPLPUH1ByPlT2s89k/EDpmtW/cPaIP4XPeA/qGf660OsNkNknE2QeVkKKKKgSCormfiHYWk8o6rG2n+YjC/8AyIqVqle1O4xapH/6kqj5IC36qKnXHdJIjN4i2ZFwXjAtpyJ3kKd4FexY6SCNDqyjvBh1z41p/s84baYM9mPu521n3guUyDpVvd3ztTHl+HAFXvgcIAJx6f3rXctqZljLfJIlRS0UVhNgUUznkkU5xqXyHvD/AFrvbzBxkVVG2MpbfZ3B1oopDVpwRXBJAPTY+nj/AHr1VT4ZxPTxC4iJ2crj+ZEX9R/0135t5ia20pGAXYZy24AG3TxNXKibmoJcsz/4iCg5v0SnHI8xE+RB/Ooq/uS8Uf0PxFR/AeZZLhjBMFyytpZRjcAnBHyrtbzBchhlT1H+nka819crnpr9k+N6x/sfR0Fsb698OcM8RMQQV652+NWi2bLufLC/QZ/vUJ9qiTeNDq8C24FMOOcy/YoE0qHllLEaugAO7Hz6jb1qr6NBQn41LPvjo0XVzuklGPPSLrSMcdaoPKfPrzzrBOiLryFZMjvAZwQSeuDvT72l8Y7G3ESnDynHwRd2P6D516bayiejthaqpLkuFGK8xHIB9K91EyiGmiWI1a27zeGeg+Ap5SE1VZVCfMl0dTa6DFLXKKdWJCnOOp8PrXWpxaa4OEPzRYdtBJGGKF0ZNY6rrGMj4VlvO00IiWH7epmhYEh7lIZJCAR94V6HfVjG5G/WtluEypHpVJ4nwG2Zmka2hZ2OWYxIWJxjJYjJ6Vqqy1hGa1qMsspfIfFcXdvNlcSFoXKnKkklSVPiNaqRW3isR47F2eGQAaCGUAAAFDkYHxFbVbShkVh0YAj4EZqWqjymTpecnSiiispcFZ57UpMyWqZ2xIx+WgZ/WtDrH/ba03bxCMqE+zy6y2xwzBQqnwY529aspeJpkJrMcE5y9hkVlIKsAwI8QRkH6Grvwte586yf2XG5CIrmNrYQgIVzrV1YDS5PiQSceAxWuWHuCrr57omamOLGhzRRRWU2CYoApaKYAUhpaQ0BlXMTsl5KynDBwwPkcKQa78V4it2ELERzKNJ1bI467N+6fj51155ttF1q8HUN8xsf0FV+vS0VRtqhNcNLs8zdOVdk4Ppsu3KfLjI4nkZTgHSFOobjBJI26frXudMOy+RIqn8PnmQ/cGQHxCZP1A2Pzqz2s0jqHmUq565UpnGwOk+deL/i/Sz8aulJPDx+0eh+hXwz44xaO1eOcuV3uYYWiI7SMEaTsGDYJ38DkV4u5SqMwGSFJx1zgdMVROMcxXku00rqD+4AYl+gwT8ya+T/AA3U25z/AEPTQptssi62k18jjhFuLO4Wa5YAxEsIkYO7NggAhSQo3zkmmPMHGJLuYyvt+6i9Qo8B8fM1GCn/AAG07W5hj/FIufgDk/kDXrcH1ZUKG6+bzJI3u3HdUeg/SuleUFeqzniWFN7qAvtqIXxA8fnTiiozgpLDBziiCjAGBXSiiuxiorCAjVXb1Oo+NWI1Sed1udANrMkGmQtLK6hwsSo7N3T6hQcb4NX0yw2Z71nBU+MypKheNgy5dcjzRmVvzU/lWl8ny6rK2J69igPxVQD+lYRy1a3Cx4Ei9iHl7SEgagWzpfV16rpwPwmtt5AP/AQfBx9JHFW3y3VpipbZtFiopKKyF+Razr2ioPtdvnoY2H0cH+9aLVE9pMWHtZPV1+uk/wDaau0/+Yiu78DOvBIlVQqgAAAADYbAD+wq22HuCqlwk7CrVw09351dqFwZtP8AjHlITS0GsZuI7h/Hbad2jhuIpHT31SRWZcHByoORvtUjXyVzPFNwris3ZMUeOUvGw2yjnUufMFTgj419Mcl8xJf2cV0m2oYdfwyLs6/Xp6EUBOmqpzPzUIiYocGTxPUJ/qfSnPOXGjBGEQ/eSZA9Btk/HcAVXOCcnyS4eYmNTvjq5z4ny+e9bdNVWl5LXx6XyYdTbY346u/f5De+na4s1lYlpIZCjMepV8EE/PA+VQNaqOAxLA8CKFDqQT1JONiT1JrLXQoxVhgqxBHqp3r6egvjKM4x4xyj5msolCUXL32a5wyyWKNUQAAAfM+JPrUZzDH3lb0IqdQ7Cozj6ZjB8j+teO+rwdmlnn+p6bSYhOOCJ4YmZV+OfoKsd1aJIpV1VlIwQQCD8jUJwBMyE+Q/WrHWX6DDbpt3yy7WSfk4Pn/jlmIbiaIdEcgfy9R+RFSvJp7Iz3hG0ER056GSTZR/vzplza+b24P/ALh/IAf2rRuU+WYzw8RTrntvvHHQjOCm46EALXoW8I9BrNSoaSCl/NjP9PYx5O577QrDdkBzgLINlY+TDop/I1fwayfmL2fSxZe3JlQfun3wPTwb9anvZvzI0oNrMT2iDuk9WUbEHO+pdvqKg0u0fI1enplDzad8e18F7oqP4/xeK0t5LmY4SNdR8z5KPUnAHxr5sHOPEOJ8ShCzSJrmURxRuypGuryGNWFBJJ67+G1QPln1HRRRQCGoS86t8TU21Zxzddy9v2cBHaCHI/4iOJh2shGoRSArLtERuNt8datqeHkovjuwjjzAoCnG3U7eZJJPzJJ+dW7kNMWEH8rH6ux/vWeXLSaJ2lSSMmTISR+0IAijyQwJXBbUcLsPIdK0/leDRZ26+Ihjz8dIzV+oeYIhRHEmSdFLRWM04Cqt7RLfNqHx/hyI3yPcP/VVppnxezE0MkR/fRl+BI2PyODUoPEkxJZWDJbDjd0sggt+zuZN9S9myCPv4xLNr0p3TnOnJxsN61PhEhxvjJAJwcjON8E9RWQ2smh2E0l2sbYIS2RjmQDS6s8KGQN3R1YDBO+1X7keTTAseChjZx2TNqeJHdmiSQ5PfEbLnJPxNaLHnKM2FFqSLnRSA0tZTUfP/wC0hw0Lc21wB/iRujH1iYEZ+Un5Uv7OvMGieaxY92UdrGP40GHA+K4P9FWb9oyz1WEEoGdFwAfQPG/91UVg/LnFmtLmG5T3onVseYHvL8wSPnQH2C3CYzN27DU4AVc9FAz7o8zk70/FQtzdPd2LS2Uul5YS0MmxwzLlcg7ddvSsH4L7YeJWkpjvAJwrFXSQKkilTggMgG4weoNdbbOKKXR9JGs+5+4Toft1HdfZvRsbH5j8x61N8mc82nEkzA+HA78T7SL8v3h6jap7iFms0bRuMqwwf9atoudU1JFOopVsNp6sH1Ro3mqn6gVz4omYmHpn6b11soNEaJnOlVXPngAZr3IuQRWW+HkhKPymX1vbgiOXU2ZvUD8qmTTHg8OmPB8z+Rx/anxrP9Pq8WnjEtulum2Y5wXg5vOIyZB7NZneQ+GkSNhf6sY+Ga2JRjaovl3giWsZUbszF3b8TMST8hnA+Fe+YOP29nEZrmVY0HTPVj+FVG7H0Fbm8l2r1LvkvhLCJI1B3XLUTXEd0mY5UbJK9HBBBDjx2PXrWPcw+3edmK2UCRoDs8uXdh56QQF+G9bHwPisn2CK6vAsT9iJZfBV7uScHptvj5VEzRk49GU/tGcw/wCBYIev30mD5ZWMHzHvHHoKhf2d+ECS+luCNoIttujynAI/pV/rVB5x4617eTXTf8x+6PJBsg+SgfPNbb+zjY6bKeYjeSbSD5iNB/d2oRNcooooDldNhT/vrWb8a4mxeXCWMsXaiEdu7RNrVDlNbRMjEMsu2+MEelXvjd6kSF5GCoo1MzbBQPEmsuuuKJKTaR3VlNFI79mWSR5o+31MVCBTG5GtsOSNgCc75tgiiTzISSwZYo7c6QzuRpTJRBLKxEaZ/dQOFGw2UbDpWxRJgADoAB9KzngFqJb6MD3YlL/5QFX8yPpWkCp6h8qPwdqXbCiiis5cFIaWigMn514WY7vYSNGxMhjjlMRkV9nXVqUEhwGwSMgkeNe+VuIwRXJiEKW3aaI1t0KO4K9qxluOzJWPUWCKCSSTv12t/PnBhcWxOnJQEkfiQjEi/TceoFZ1wSOZwlvArwiOO4djEGtozLqQWxMoDdqManPvZJ7w8K0J7op+zPNYymbHZyZX1FOKhuHylQuognADEbDVjcgeWamBVU44ZKme6JW/aNwM3nDriBRlympP54yHUfMrj518hsCNj1r7hr5j9tnKBs7wzxriC4JcEDZZerp6Z94fE+VQLh97HPaQLI/Y7o4tnYlH/wDRZuuf4CevkTnxNTPt25SjdF4ra6WVtIm0EFWB2SYEdfBT8V9axKpbhnMdzBFJBHKexlVleJu9GQw66T0PjkYOwoBlw+/lgkWWGRo5EOVZTgg/78PGvo72Xe1GO/C29yVjugNvBZseKeTea/MenzRXuKQqQykhgQQQcEEbggjoaA+36Kyz2Q+0wXoFpdsBcqO6/QTKB+TjxHj1HjjU6AQCloqie1D2hR8Ni0R4e6kHcTqEHTtJPTyHifmaA7+0T2hwcMTSfvLhlykIP0dz+6v5nw8a+Z+ZeY7i+mM1zIXbwHRUH4UX90Uy4jfyTyNNM7PI5yzNuST/AL6eFNhQGqew/klLqU3twMwQN3VPuvKBnJ/hQEH4ketSPto9pCTq1hZvqjyO2lXo+Dns0PiuRufHp0rNpebLs2i2Ky6Ldc5jQadeokkyMN2znoTj0qDoAr659mPBDacNtoWGH0a3B6h5DqI+WcfKsB9kHKRvr5WdcwQYkkPgSD3I/wCoj6A19TCgFpGNLTO+m2wPHr8K6ll4IzkorLKpzdzKkDorNGAyu7CQHDouwiUkhQ7knGrY6GGDUNbgxvKqB0hCo/ZyFXKSOi4RHV20qiqRo3A1LpOk4p/xO+uYhILi3WaBy2Ghw7RhjhVkgkA14yBqGdzuMVF2fC9KxWcaorucuIxhAzd6RgPBRuAOmABWqEeeekZN3H5stPINkRG9wRvK3d/kQkD6ksfpVsrlaQLGioowqgKB6DYV1rNKW55NcY4WAoooqJIKKKKAQis84zE9lPiOPXHI2UGoIFye8CSDspwfPB2BxitEqP43wtbiJo2xnqrYzpbwPqPAjxBNWVz2shZBSXJSOB8yTSySmVIoreBWEz6nbTIp3USEBWCqNRbGO8o65xebG48Cfgaxy84dNCRbFfu4nTsoSE+zAl8yNdanUyALqZTkA7eIq5cr8XhHZWcczTuI3cSrGyxFFfHdb3dIJCKAWxgDNWSWeGZ3HZ90S/1F8ycChvbd7adco4+anwZT4EGnVrc52PWnVUNYNMZKSyj5J565CueGyHtF1wE9ydQdB8g34W9D8s1U6+3bm3SRSjqrKwwVYAgjyIPWss5v9iVrPmSzf7O/4Dloifh1T5ZHpXCR860VO80coXlg+m5hKj91x3o2+Djb5HB9KgqA62ty8brJGxV1IZWHUEHIIr619nHNA4jYx3Bx2g7koHQSJjJA8AdmH81fItbh+zXfnN3ATtiOUD17yt/20BrfNnHUsrSa6fcRrkL01MdkX5sQK+QeM8VlupnuJ2LSSEsx/sB4AdAK3X9o/iZW1trcHHaSs5HmIl2+WXB+VfPtAFFFSnAeX7m8k7O1haRvHA7q+rMdlHxNARdT/J/KFzxGYR26d3PflOdEY82Pn6Dc1rPKXsKRdMnEJtZ69jFkL8Gk6n4AD41r/DOGxW8YigjSNF6KgAH/AJ9aAjeTuV4eH2y28A26u596RzjLt9Nh4AAVO0VzlkAGTQ43jliTyhRmqDzPxiT7SkUBLsiNLLEkscLAZTsnkaTYw47TUFyd1OOlPeY+ZgjmMJI4UEztECTBHp3YficFkOlckA6iOmYLl0yI0LaFmhMchgnDgyQxMYyIp2A0ysVWLBBJ7rA5xqNsY+jPKW7n0P8Ah3HZJInaXsco5QPA7PC40I2pHYAnBcofVD8pzk3hpwbmQd6TZAfCPz/q2PwxUXw2w+1S4xiCM97AwCeugY+p/wDur2owMVZbPC2L9RTXzuFooorMaQooooAooooAooooCA5p5eW5UMFUyIQV1dG0kMAfgRkHwPzrLLm4lh+1IwWOWbW88xKxabeJQOxtwxP3xDOd9gzFt8g1uVQPMnLq3A1LgSjofA+QPqPBuo/KrIy9MhKPsguC8V7OKIXUgR5X0wI7hpWjY/dB9PvPgjJHzOd6t1td+DfWszsOFlb+IyIw7JGd3dyzy3GNCO4PQhJJSCNjkdNIqx8Y4/2UkcUcfauyvI6hguiCNTqlLHYd7SoBxkk7jBNWOKa5M7bjL7S65pagOD8bjlUGKQMCqPpzhgsihlLL1GVYHepmK5U+O/lVLi0XxsTPN9ZRzI0cqK6MMMrAMpHqDWHe0T2MlNVxw3LL1a3O7Dz7Jj7w/hO/kT0reBS1EsPh90IJBBBBwQdiCOoIrVv2cn/4+cedsfykj/1q2+2b2cLcI99aJidRmVFH+KoG7AfjA+o9arP7N1vm7uZPBYQvzeQEf9BoDt+0o/8AxFoPKKQ/V1/0rGwK2T9pSP7+zbwMcg+jKf8AuqV9jPs1CKl/eJ94cNDEw9xfCRh+I9QPDr16AQPs99jclwFnv9UURwyxDaVx17xP+Gp/zfCt54TwmG2jEVvEsaDoqjHzPmfU09pKAWivLyAdTUZxLiwjjZyG0qMnSrOxH8KKCSfgK6k2RlNR7JCacL8fKqrxni7yPJawOEuezDrrUhdOcEIx6tuO8AwXUCQelQXFOPm4R3iAlt0e3eQQszSvC/a9qrBcFWVkGqMZJVW33wGkHDbeWVzA8i26qkkboWXsLnUwPYM42zH76YK9MjerIx9Ipk2+xxw2yaHRNZErqYR3cM52LqMPOxHSYEZLLkSBgehDU9seGK7tDaoI0Z2klcDYFySx9WPgP7CvfCuHtLmOEsE1EyTOdTMx94kn3mOw2wAAOgAFXXh9ikKBIxgD6k+JJ8TU96gsLsRi5d9Hqxs0iQRoMKPz8yT4k+dOKKKzmgKKKKAKKKKAKKKKAKKKKAKKKKAYcV4VHOMMMMPdcbMvwPl6GqNf8ui3aWSaBbgSae8+HXuAgLlwTGDk7e79TWkUjLnrU4za4IuOTEIbiSGR7iXBlRY7zSo0u81wXt0tO1DEdggEQOlfLPhVuuuPvaSIt48bh4ZJGMUbKUaNo1wFLtqRjIFBODkeu1h4ryrFIGCdzUCGXGY2z4FfD+nHSqtf8uyQksY9eoFZTI0tws0WhlETszF0QFtWOmRk+dTTT6K5Rz2WG05nizoeTsnDmPs5iEbWFRioJOlu7Ih7pPWpxb7zWsutOGSu0cTTDs4bV4VldRLradvvCEMmVKxhUUvq2zkGk4FIiyyt22iPtX0ffSJNotIY1QGLoVkEbuWI3/qBo18o4srpmrC8U+lQfLfLdtZzXUsB0/aXV2XbCkA5C+hLE48M+VUThnH7tbOaV5W1xWEc57VYi3bSKXjZAo3jIBU6t8g9MVOz3l6LiK3WaEtJDNKC0JwvZdgFDaXGcmRs48hio7Ud3SRP8y8tW17JbST4YW7s4XbDlgBhv4QQDjxxU79pUeNUfg3FLqSdoJBGrQM/bssbBXR97fsiXOCy5Zs5xpI8RSc2XUyTW4jkmCyiaPRCIdRkWJnjYNIu3ut1OMCu7FjJzfLOC6tfDwBqDu+bbcagsyMwUt2cREjsFxq0gHcjIz5eNU3jFxdrLDIGR7iztUkuIlfAk7UsJ0WNVJYkR93phtPnivFtZTC4eaAMscc32iCOZViiP2mMC4T3e1SQEthsFRkjFFH4Qy32yb//ADl7NraC3QLFIySRySDt2MZGuMY7kbFWDKcsCD1XOadco3oe1R9bMxaQsHbVIjdo/cfJOGXpj02ptbvouJpUYkzCPMKLka41C689WbG2cAYUbU/4fwCUghUS3QkscAa2LHJJA8SfFiTViSjzJkGt3CGN1FGl19pRirsgR40AxKwJKtJsdRXJAxg7nJPQStpwSSY6rglE8Iwe8f5iPdHoN/hU1w3g8UO6rlvF23Y/Pw+AqQqErfUSyNX+o5wwqihVACjYAbAV0ooqkuCiiigCiiigCiiigCiiigCiiigCiiigCiiigCkxS0UAxu+EwybvGpPmO6f8y4NRd1yqjAgSNjGNLhZFwfDB61YqKkpNdEXFMpFzyUWBBWFgUEZGHiBjU5VCE2IBJwPDJ8zXs8vT9qs5jBkRDGrdtJsjYyNJODnAJJBJwN6ulFS8siPjRS4OCXCSyTLHh5dOsmZiDo2XCFiq436AdTXS44BPKUMkUJKHUhc6tLfiXunB9auFFd80h40VpOX5ju8yj+VST9SR+lOoeWohu5eT+ZsD6LipuiouyT9nVXFHG2tEjGERVH8IA/Su1FFQJhRRRQBRRRQBRRRQBRRRQBRRRQBRRRQBRRRQBRRRQBRRRQBRRRQBRRRQBRRRQBRRRQBRRRQBRRRQBRRRQBRRRQBRRRQBRRRQBRRRQH//2Q=="
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
    className="absolute flex h-[350px] w-[350px] items-end justify-center bg-cover bg-center lg:rounded-bl-[200px] xl:rounded-bl-[200px]"
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
