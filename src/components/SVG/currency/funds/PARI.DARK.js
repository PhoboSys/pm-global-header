import React from 'react'

const PARI = ({ fill = '#000000', size = 1 }) => {
  const width = size * 16
  const height = size * 16

  return (
    <svg width={width} height={height} viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path fillRule="evenodd" clipRule="evenodd" d="M9.89376 0.185451L9.75238 3.25924V3.25672C9.73254 3.70124 9.16949 3.86794 8.91898 3.50423L6.52542 0.0364338C6.46589 -0.0469147 6.33939 0.0263309 6.37908 0.119782L7.55725 2.95363C7.7284 3.36279 7.29433 3.76186 6.91236 3.54465L3.27862 1.47861C3.18932 1.4281 3.10499 1.54933 3.18188 1.61753L5.4539 3.64567C5.78379 3.94118 5.56056 4.49179 5.12401 4.464L0.969394 4.20891C0.870179 4.20133 0.845375 4.34782 0.94211 4.3756L3.85406 5.20151C4.27325 5.32022 4.30797 5.91376 3.90367 6.08299L0.0516573 7.68934C-0.0401164 7.72975 -0.000430486 7.87119 0.0987843 7.85351L3.07771 7.31553C3.50681 7.23724 3.79205 7.75753 3.49937 8.0884L0.711435 11.238C0.644465 11.3137 0.7412 11.4249 0.823052 11.3642L3.27366 9.56089C3.62835 9.30074 4.10458 9.64424 3.98304 10.0711L2.81479 14.14C2.78502 14.2385 2.92144 14.2966 2.96857 14.2057L4.40719 11.4981C4.61554 11.1066 5.19098 11.2051 5.26291 11.6446L5.94253 15.8272C5.95742 15.9282 6.10376 15.9206 6.10872 15.8171L6.2501 12.7433C6.26994 12.2988 6.83299 12.1321 7.0835 12.4958L9.47706 15.9636C9.53659 16.0469 9.66309 15.9737 9.6234 15.8802L8.44275 13.0464C8.2716 12.6372 8.70566 12.2381 9.08764 12.4554L12.7214 14.5214C12.8107 14.5719 12.895 14.4507 12.8181 14.3825L10.5461 12.3518C10.2162 12.0563 10.4394 11.5057 10.876 11.5335L15.0306 11.7886C15.1298 11.7961 15.1546 11.6497 15.0579 11.6219L12.1459 10.796C11.7268 10.6773 11.692 10.0837 12.0963 9.91449L15.9483 8.30814C16.0401 8.26772 16.0004 8.12629 15.9012 8.14397L12.9248 8.68699C12.4957 8.76529 12.2104 8.24499 12.5031 7.91413L15.291 4.76456C15.358 4.68879 15.2613 4.57766 15.1794 4.63828L12.7288 6.44164C12.3741 6.70178 11.8979 6.35829 12.0194 5.93144L13.1877 1.86252C13.2175 1.76402 13.081 1.70593 13.0339 1.79685L11.5953 4.50442C11.3869 4.8959 10.8115 4.7974 10.7396 4.35792L10.0599 0.175348C10.0451 0.0743194 9.89872 0.0818966 9.89376 0.185451ZM8.74641 8.52931C9.66055 8.54811 10.4166 7.81015 10.4351 6.88102C10.4536 5.9519 9.72754 5.18345 8.8134 5.16465C7.89926 5.14584 7.14321 5.88381 7.12471 6.81293C7.10621 7.74206 7.83227 8.51051 8.74641 8.52931Z" fill={fill} />
    </svg>
  )


}

export default React.memo(PARI)

