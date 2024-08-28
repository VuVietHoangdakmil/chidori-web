import i18n from "i18next";
import { initReactI18next } from "react-i18next";

const resources = {
  en: {
    translation: {
      t1: "Stores",
      t2: "Left at Chidori",
      t3: "Member",
      t4: "About us",
      t5: "Blog",
      t6: "Book in advance",
      t7: "Chidori | Coffee in Bed®",
      t8: "Coffee in your own space",
      t9: "Enjoy a short in-town vacation with Japanese standard service at the cost of just a cup of coffee",
      t10: "Reserve your own space",
      t11: "View Available Space",

      // p1
      t12: "At Chidori, you always have #your own space",
      t13: "In the hustle and bustle of the city, personal space has become more luxurious. Chidori is not only a peaceful retreat for moments of rest, a quiet spot to get work done, but it's also where you can ignite love, foster friendships, and create memorable memories.",
      t14: "To reserve your own little corner at Chidori...",
      t15: "Choose your favorite space",
      t16: "Chidori has many space types designed for different needs and privacy levels.",
      t17: "Book the space for your “hideaway”",
      t18: "Whether you're just taking a quick nap in the afternoon, or looking to escape the whole day, Chidori has just the perfect combo for you.",
      t19: "Savor delicious pastries and fine tea",
      t20: "All tea leaves used at Chidori (Sencha, Hojicha, Genmaicha) are selected and imported directly from long-standing Japanese tea farms, maintaining the original flavor that has lasted for 1000 years.",
      t21: "Preview menu",
      t22: "Experience Japanese standard service",
      t23: "Applying the Japanese Omotenashi philosophy, Chidori provides service with sincerity, caring for subtle things, so customers feel welcomed beyond expectations.",

      //p2
      t24: "Spaces at Chidori",
      t25: "However much privacy you need, Chidori has just the right space for it!",
      t26: "More open",
      t27: "More private",
      t28: "Space",
      t29: "Café Space is a shared space, unlimited usage time at all Chidori stores. Like a familiar coffee corner for your meetups with friends.",
      t30: "Dating with friends",
      t31: "Unlimited time usage",
      t32: "View detail",
      t33: "Meeting Room are spacious, quiet meeting rooms, fully equipped for meetings, internal events, workshops, or small exhibitions.",
      t34: "Meetings, internal events",
      t35: "Workshops, pop-up stores",
      t36: "Book",
      t37: "Level Seat is a semi-private space with open partitions and light from green windows, suitable when you seek enough privacy but also a spacious and cozy atmosphere.",
      t38: "Groups of 3-5 people",
      t40: "Comfortable leaning back resting full of light",
      t41: 'Coffee in Bed are cute, cozy, relatively private, and fully equipped "mini rooms".',
      t42: "Quick energy regeneration",
      t43: "Work in a quiet private space",
      t44: "Private time with loved ones",
      t45: "Private Room is a completely private café combined with accommodation, without cameras, designed as studio rooms, suitable for spending time dating your other half.",
      t46: "Day-stay services",
      t47: "Private coffee for the family",

      //p3
      t48: "Chidori stores",
      t49: "7 locations across many districts in Ho Chi Minh City for you to visit",
      t50: "Chidori Vinh Vien",
      t51: "The harmonious blend of old and new, encapsulating traditional elements with the youthful vibe of a bustling District 10.",
      t52: "Chidori Vo Oanh",
      t53: "The uniqueness through design, aspiring to offer you a rich, multi-faceted experience in one single destination.",
      t54: "View all 7 locations",

      //p4:
      t55: "Café Space is an area with unlimited usage time at all Chidori stores. Like a familiar coffee corner for meetings with friends or a place to meet deadlines. You don’t need to make a reservation; just order any item to use this space for relaxation, conversation, or working all day.",
      t56: "Space amenities",
      tServices:
        "Air conditioner # Desk and chair # Wifi # Paper # Projector # Power outlet # Free bottled water, iced tea # Work desk # Tissue # Soft blanket # Hand sanitizer",
      t58: "Suitable space for",
      t59: "The dynamic life creates many styles and trends of diverse and freer working. Café spaces combined with working bring a feeling of freedom and closeness chosen by many young people for working sessions, meetings, group studies. The Meeting Room is spacious, quiet, and equipped with necessary items such as paper, pens, projectors suitable for meetings, organizing workshops, internal events.",
      t60: "Located at the intersection of many main roads, Chidori Đinh Tiên Hoàng and Chidori Sư Vạn Hạnh welcome a diverse range of young people with various purposes of resting.",
      comboTitle:
        "Little Recharge # Take a break # Mini Staycation # One Day Getaway",
      t61: "Location with",
      t62: "Other spaces",
      t63: "Policies",

      t64: "Our friends at Chidori",
      t65: "We appreciate you coming and cherish these moments at Chidori",
      t67: "Are you a Chidori member yet?",
      t68: "Chidori deeply values our loyal customers, who have consistently supported and journeyed with us over time.. Aspiring to deliver greater value to you each day, Chidori has upgraded our member points accumulation program. So that you can receive more benefits and special privileges each time you use our services.",
      t69: "View memberships program",
    },
  },
  vi: {
    translation: {
      t1: "Chi nhánh",
      t2: "Làm việc tại Chidori",
      t3: "Thành viên",
      t4: "Về chúng tôi",
      t5: "Blog",
      t6: "Đặt chỗ trước",
      t7: "Chidori | Coffee in Bed®",
      t8: "Cà phê trong không gian của riêng bạn",
      t9: "Tận hưởng kỳ nghỉ ngắn gần nhà và dịch vụ tiêu chuẩn Nhật Bản với chi phí chỉ bằng một ly cà phê",
      t10: "Đặt không gian cho riêng bạn",
      t11: "Xem các loại hình không gian",

      //p1
      t12: "Ở Chidori, luôn có #không gian# dành riêng cho bạn",
      t13: "Giữa chốn thành thị tấp nập, không gian riêng càng trở nên xa xỉ hơn. Chidori không chỉ là chốn yên bình dành cho những giờ phút nghỉ ngơi, khoảng lặng để hoàn thành công việc. Mà còn là nơi thắp lên tình yêu, tình bạn và ghi lại những kỷ niệm đáng nhớ.",
      t14: "Để giữ một góc nhỏ tại Chidori cho riêng bạn...",
      t15: "Chọn không gian yêu thích",
      t16: "Nhiều không gian được thiết kế cho các nhu cầu và mức độ riêng tư khác nhau.",
      t17: "Đặt trọn thời gian “ẩn mình”",
      t18: "Dù chỉ để chợp mắt nghỉ trưa một chút, hay trú ẩn cả ngày dài, Chidori đều có combo phù hợp cho bạn.",
      t19: "Thưởng thức trà ngon, bánh ngọt",
      t20: "Tất cả trà sử dụng tại Chidori (Sencha, Hojicha, Genmaicha) được tuyển chọn và nhập khẩu trực tiếp từ những nông trại trà lâu đời Nhật Bản, giữ nguyên hương vị nguyên bản 1000 năm tuổi đến với khách hàng.",
      t21: "Xem trước menu",
      t22: "Trải nghiệm dịch vụ tiêu chuẩn Nhật Bản",
      t23: "Áp dụng triết lý Omotenashi Nhật Bản, Chidori cung cấp dịch vụ bằng lòng chân thành, quan tâm từ những điều nhỏ nhưng tinh tế để khách hàng cảm nhận được tiếp đón với sự chu đáo trên cả mong đợi.",

      //p2
      t24: "Không gian ở Chidori",
      t25: "Bạn cần bao nhiêu riêng tư, Chidori cũng có!",
      t26: "Cởi mở hơn",
      t27: "Riêng tư hơn",
      t28: "Không gian",
      t29: "Café Space là không gian chung, không giới hạn thời gian sử dụng tại mỗi chi nhánh của Chidori. Như một góc cà phê thân thuộc cho những buổi gặp mặt của bạn cùng bạn bè.",
      t30: "Hẹn hò cùng bạn bè",
      t31: "Sử dụng không giới hạn thời gian",
      t32: "Xem chi tiết",
      t33: "Meeting Room là những phòng họp với thiết kế rộng rãi, yên tĩnh, được trang bị đầy đủ thiết bị cho những buổi họp mặt, sự kiện nội bộ, workshop hay triển lãm nhỏ.",
      t34: "Họp mặt, sự kiện nội bộ",
      t35: "Tổ chức workshop, pop up stores",
      t36: "Đặt",
      t37: "Level Seat là không gian nửa riêng tư với những vách ngăn mở và ánh sáng từ những ô cửa sổ xanh mát, phù hợp khi bạn tìm kiếm sự riêng tư vừa đủ nhưng cũng rộng rãi ấm cúng.",
      t38: "Phù hợp cho nhóm bạn 3-5 người",
      t40: "Thoải mái ngả lưng nghỉ ngơi ngập tràn ánh sáng",
      t41: "Coffee in Bed là những “căn phòng mini” xinh xắn, ấm cúng, tương đối riêng tư và đầy đủ tiện nghi.",
      t42: "Nhanh chóng tái tạo năng lượng",
      t43: "Làm việc trong không gian riêng yên tĩnh",
      t44: "Thời gian riêng tư với người thân",
      t45: "Private Room là mô hình cafe kết hợp lưu trú hoàn toàn riêng tư, không có camera, được thiết kế dạng phòng studio, thích hợp để dành thời gian hẹn hò với một nửa của mình.",
      t46: "Tận hưởng dịch vụ lưu trú trong ngày",
      t47: "Thưởng thức cà phê riêng tư cho gia đình",

      //p3
      t48: "Chi nhánh Chidori",
      t49: "7 địa điểm trên nhiều quận cho bạn ghé thăm tại Thành phố Hồ Chí Minh",
      t50: "Chidori Vĩnh Viễn",
      t51: "Sự giao hòa của cũ và mới, trong sự kết nối giữa những điều truyền thống với nét trẻ trung của một quận 10 sôi động.",
      t52: "Chidori Võ Oanh",
      t53: "Sự riêng biệt thông qua thiết kế, mong muốn có thể cho bạn trải nghiệm đa dạng ở cùng một nơi chốn ghé đến.",
      t54: "Xem tất cả 7 chi nhánh",

      //p4:
      t55: "Café Space là khu vực không giới hạn thời gian sử dụng tại mỗi chi nhánh của Chidori. Như một góc cà phê thân thuộc cho những buổi gặp mặt cùng bạn bè hay địa điểm chạy deadline. Bạn không cần đặt chỗ trước mà chỉ cần gọi món bất kỳ là có thể sử dụng không gian này nghỉ ngơi, chuyện trò hay làm việc cả ngày.",
      t56: "Tiện ích của không gian",
      tServices:
        "Máy lạnh # Bàn ghế # Wifi # Giấy # Máy chiếu # Ổ điện # Nước suối, trà đá miễn phí # Bàn làm việc # Khăn giấy # Chăn mền # Nước sát khuẩn",
      t58: "Không gian phù hợp để",
      t59: "Cuộc sống năng động tạo nên nhiều phong cách và xu hướng làm việc đa dạng, tự do hơn. Những không gian cà phê kết hợp làm việc mang đến cảm giác tự do, gần gũi được nhiều bạn trẻ lựa chọn cho những buổi làm việc, họp mặt, học nhóm. The Meeting Room rộng rãi, yên tĩnh, được trang bị đầy đủ các thiết bị cần thiết như giấy bút, máy chiếu phù hợp cho các buổi họp mặt, tổ chức workshop, sự kiện nội bộ.",
      t60: "Nằm giữa khu vực giao nhau của nhiều trục đường chính, Chidori Đinh Tiên Hoàng và Chidori Sư Vạn Hạnh chào đón đa dạng những bạn trẻ từ mọi lứa tuổi với nhiều mục đích nghỉ ngơi.",
      comboTitle:
        "Little Recharge # Take a break # Mini Staycation # One Day Getaway",
      t61: "Chi nhánh có",
      t62: "Các không gian khác",

      t63: "Nội quy",

      t64: "Bạn thương ghé thăm Chidori",
      t65: "Cảm ơn bạn đã đến và lưu lại những khoảnh khắc này cùng Chidori",
      t67: "Bạn đã đăng ký thành viên của Chidori chưa?",
      t68: "Chidori trân quý những người bạn thân thiết đã luôn đồng hành và ủng hộ Chidori suốt thời gian qua. Với mong muốn có thể mang đến cho bạn những giá trị tốt hơn mỗi ngày, Chidori đã cải tiến chương trình tích lũy điểm thành viên để bạn có thể nhận nhiều ưu đãi và quyền lợi đặc biệt mỗi khi sử dụng dịch vụ.",
      t69: "Xem chương trình thành viên",
    },
  },
};

i18n.use(initReactI18next).init({
  resources,
  lng: "vi", // Ngôn ngữ mặc định
  fallbackLng: "en",
  interpolation: {
    escapeValue: false, // React đã tự động xử lý việc escaping
  },
});

export default i18n;
