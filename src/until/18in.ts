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
