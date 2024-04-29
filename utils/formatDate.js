import dayjs from "dayjs";

const formatDate = (dateString) => {
  const date = dayjs(dateString);
  const today = dayjs();

  const diffDays = today.diff(date, "day");

  if (diffDays === 0) {
    return `Today at ${date.format("HH:mm")}`;
  } else if (diffDays === 1) {
    return `Yesterday at ${date.format("HH:mm")}`;
  } else {
    return `${date.format("MMM DD, YYYY")} at ${date.format("HH:mm")}`;
  }
};

export default formatDate;
