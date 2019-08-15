const converter = require('./lib');
const fs = require('fs-extra');

let icons = converter(`<?xml version="1.0" standalone="no"?>
<!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN" "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd" >
<svg xmlns="http://www.w3.org/2000/svg">
<metadata>Generated by IcoMoon</metadata>
<defs>
<font id="icomoon" horiz-adv-x="1024">
<font-face units-per-em="1024" ascent="960" descent="-64" />
<missing-glyph horiz-adv-x="1024" />
<glyph unicode="&#x20;" horiz-adv-x="512" d="" />
<glyph unicode="&#xe900;" glyph-name="_btn_" horiz-adv-x="964" d="M526.173-13.234c-2.65-2.012-2.626-1.994-5.349-3.879-5.542-3.488-11.276-6.451-17.516-8.499-4.114-1.355-8.288-2.217-12.559-2.903-3.223-0.367-6.385-0.584-9.632-0.657-4.241 0.090-8.421 0.367-12.601 1.114-10.704 1.915-20.444 6.343-29.395 12.439-7.806 5.825-15.173 12.324-22.667 18.528-71.264 59.681-139.656 123.019-202.981 191.115-49.357 53.073-96.111 109.195-135.198 170.339-28.817 45.068-53.706 93.431-67.464 145.348-4.626 17.456-7.915 35.298-9.336 53.308-0.59 7.517-1.036 15.155-0.699 22.697-0.325 3.427-0.53 6.843-0.717 10.282-1.813 93.786 33.057 189.115 99.84 255.765 20.986 20.944 45.008 38.882 71.313 52.597 47.767 24.907 102.641 35.159 156.112 27.961 26.046-3.506 51.489-11.059 75.33-22.088 29.298-13.553 55.838-32.292 79.179-54.543 4.692 4.475 4.692 4.433 9.493 8.788 7.752 6.692 15.637 13.149 23.974 19.113 19.438 13.908 40.617 25.419 62.964 33.931 22.245 8.463 45.61 13.932 69.319 16.059 54.935 4.927 110.369-8.391 157.774-36.406 27.768-16.408 52.622-37.557 73.752-61.892 41.080-47.309 67.831-106.237 78.794-167.779 2.903-16.324 4.722-32.84 5.457-49.411 0.452-10.312 0.657-20.667-0.289-30.961 0.223-3.518 0.096-7.054 0.048-10.565-0.44-11.716-1.482-23.329-3.409-34.9-3.108-18.703-8.234-36.9-14.24-54.862-5.246-15.703-11.511-30.889-18.661-45.815-2.596-5.415-4.969-10.939-7.71-16.288-1.44-2.801-3.012-5.518-4.518-8.276-8.951-16.396-18.137-32.581-28.16-48.363-8.331-13.113-17.047-25.979-26.058-38.635-38.767-54.435-82.751-105.074-128.898-153.341-49.76-52.043-102.352-101.219-156.786-148.293l-36.177 48.236c57.434 49.905 112.809 102.237 164.725 157.883 43.478 46.598 84.866 95.569 120.555 148.456 14.764 21.877 28.238 44.538 40.671 67.813 3.006 5.632 5.331 11.589 8.24 17.263 0.024 0.048-0.090-0.211-0.066-0.157 1.265 2.693 2.638 5.307 3.855 8.029 4.463 10.005 8.385 20.185 11.86 30.575 6.445 19.287 11.764 38.948 13.752 59.247 0.753 7.644 0.843 15.221 0.663 22.883 0.181 3.397 0.518 6.782 0.681 10.18 1.259 71.090-23.010 143.685-69.813 197.584-18.149 20.902-39.707 38.942-63.934 52.411-43.165 23.986-94.033 32.232-142.336 21.371-19.908-4.475-39.081-12.035-56.832-22.082-17.655-9.993-33.9-22.414-48.387-36.599-6.132-6.005-11.836-12.366-17.42-18.878l-2.241-2.349c-2.53-2.132-5.006-4.018-8.035-5.409-7.921-3.65-17.233-3.65-25.16-0.012-3.030 1.391-5.506 3.271-8.041 5.403-3.771 3.945-7.258 8.15-10.915 12.204-18.95 19.992-40.466 37.237-65.036 49.851-18.926 9.722-39.31 16.613-60.32 20.076-44.911 7.403-91.311-1.512-130.994-23.564-26.016-14.456-48.941-34.171-67.891-57.061-43.809-52.923-65.771-121.531-65.879-189.838-0.006-4.728 0.584-9.403 0.861-14.119-0.036-3.223-0.102-6.397-0.060-9.632 0.638-15.83 2.867-31.419 6.614-46.821 2.915-11.987 6.764-23.63 10.872-35.25 6.686-18.926 15.39-37.201 24.811-54.898 15.372-28.883 33.256-56.41 52.399-82.926 42.743-59.229 91.829-113.821 143.227-165.623 55.344-55.778 113.815-108.502 174.652-158.22 1.12-0.837 52.591-47.056 52.591-47.056zM601.913 723.772l0.867 60.229c26.95-0.388 65.227-7.521 104.091-28.127 63.704-33.778 103.625-93.678 106.285-181.784l-60.208-1.818c-1.984 65.716-29.118 106.431-74.295 130.385-16.854 8.936-35.191 14.876-53.57 18.3-10.911 2.033-19.129 2.757-23.171 2.815z" />
<glyph unicode="&#xe901;" glyph-name="_btn_1" horiz-adv-x="964" d="M697.784 304.212l-35.202-48.881-210.824 151.835v286.485h60.235v-255.638l185.79-133.801zM103.291 154.781c-15.715 19.89-29.877 41.026-42.285 63.211-23.028 41.159-39.93 85.703-49.977 131.783-11.294 51.832-13.92 105.532-7.891 158.232 5.644 49.321 18.986 97.708 39.454 142.938 23.938 52.923 57.537 101.37 98.611 142.438 42.448 42.454 92.786 76.914 147.793 100.997 56.85 24.883 118.417 38.478 180.453 40.050 62.482 1.584 125.127-8.927 183.561-31.16 56.236-21.396 108.285-53.459 152.799-93.925 42.918-39.008 78.746-85.721 105.201-137.336 22.51-43.924 38.165-91.299 46.243-139.987 8.361-50.405 8.674-102.159 0.952-152.66-6.885-44.996-20.221-88.968-39.49-130.211-45.984-98.43-125.47-179.838-222.75-228.207-40.647-20.209-84.149-34.593-128.831-42.586-22.046-3.939-44.279-6.186-66.644-7.18-6.204-0.193-12.402-0.313-18.613-0.349-22.546 0.139-45.014 1.548-67.355 4.674-45.146 6.325-89.347 19.125-130.879 37.918-51.724 23.401-98.942 56.013-139.306 95.642l53.959 31.852c27.57-25.124 58.434-46.658 91.756-63.729 35.262-18.077 73.077-31.112 111.995-38.575 19.203-3.68 38.593-5.885 58.103-6.999 7.246-0.319 14.475-0.506 21.727-0.548 19.751 0.12 39.43 1.355 58.994 4.096 39.466 5.524 78.101 16.715 114.411 33.141 83.51 37.786 153.594 103.026 197.355 183.555 19.715 36.274 34.027 75.433 42.315 115.881 9.33 45.526 11.041 92.612 5.18 138.71-5.253 41.285-16.697 81.751-33.852 119.669-20.956 46.321-50.375 88.727-86.323 124.675-37.153 37.153-81.209 67.331-129.355 88.407-49.724 21.763-103.569 33.635-157.829 35.015-54.676 1.391-109.484-7.794-160.611-27.244-49.212-18.721-94.75-46.791-133.704-82.197-37.575-34.159-68.945-75.047-92.106-120.242-19.679-38.394-33.364-79.806-40.424-122.368-7.319-44.134-7.608-89.461-0.837-133.68 6.030-39.34 17.673-77.776 34.515-113.827 14.914-31.919 33.858-61.801 56.127-88.919l-52.441-30.955z" />
<glyph unicode="&#xe902;" glyph-name="_btn_2" horiz-adv-x="964" d="M-0.006 452.71c0 265.957 215.925 481.882 481.882 481.882s481.882-215.925 481.882-481.882c0-265.963-215.925-481.882-481.882-481.882-137.963 0-262.457 58.097-350.341 151.148l44.713 36.888c77.173-80.245 185.615-130.211 305.628-130.211 234.044 0 424.056 190.012 424.056 424.056 0 234.038-190.012 424.050-424.056 424.050s-424.056-190.012-424.056-424.050c0-93.202 30.13-179.423 81.179-249.44l-44.67-36.852c-59.272 80.071-94.334 179.116-94.334 286.292zM511.994 135.846l-272.824 276.037 42.592 42.592 200.114-200.118v499.53h60.235v-497.76l198.349 198.349 42.592-42.592-271.059-276.037z" />
<glyph unicode="&#xe903;" glyph-name="_" d="M587.123 954.46c-49.809 7.381-100.437 7.381-150.255 0l-47.317-127.701c-20.216-6.537-39.876-14.677-58.795-24.354l-123.759 56.832c-40.448-29.995-76.245-65.792-106.24-106.24l56.832-123.759c-9.677-18.918-17.818-38.571-24.354-58.786l-127.693-47.326c-7.39-49.809-7.39-100.446 0-150.255l127.693-47.326c6.537-20.215 14.677-39.868 24.354-58.786l-56.832-123.759c29.995-40.448 65.792-76.245 106.24-106.24l123.759 56.832c18.918-9.677 38.579-17.818 58.795-24.354l47.317-127.701c49.818-7.381 100.446-7.381 150.255 0l47.326 127.701c20.216 6.537 39.876 14.677 58.786 24.354l123.759-56.832c40.448 29.995 76.245 65.792 106.248 106.24l-56.832 123.759c9.668 18.918 17.809 38.571 24.346 58.786l127.701 47.326c7.39 49.809 7.39 100.446 0 150.255l-127.701 47.326c-6.536 20.215-14.677 39.868-24.346 58.786l56.832 123.759c-30.003 40.448-65.8 76.245-106.248 106.24l-123.759-56.832c-18.91 9.677-38.571 17.818-58.786 24.354l-47.326 127.701zM511.996 650.417c111.718 0 202.428-90.701 202.428-202.419s-90.709-202.419-202.428-202.419c-111.718 0-202.419 90.701-202.419 202.419s90.701 202.419 202.419 202.419v0z" />
<glyph unicode="&#xe904;" glyph-name="-_" horiz-adv-x="887" d="M273.067 138.691c0 23.592 23.605 42.722 40.982 42.722 17.503 0 42.058-19.13 42.176-42.722v-166.752c0-23.587-24.673-35.939-42.176-35.939-17.5 0-40.982 12.524-40.982 35.939v166.752zM546.133 138.691c0 23.592 23.605 42.722 40.982 42.722 17.503 0 42.058-19.13 42.176-42.722v-166.752c0-23.587-24.673-35.939-42.176-35.939-17.5 0-40.982 12.524-40.982 35.939v166.752zM635.536 283.349c29.654 78.783 47.269 128.564 52.138 203.403 14.896 227.334-166.738 337.054-233.914 383.533-65.025-47.221-233.222-157.188-229.494-385.014 1.435-84.326 26.925-137.32 51.993-201.921h140.55v33.782c0 17.627 16.608 31.928 37.093 31.928s37.097-14.417 37.097-31.928v-33.782h144.537zM761.726 483.046c-3.296-47.584-11.171-68.52-23.774-117.835 83.504-72.488 130.762-150.032 131.049-252.354 0-17.634-16.622-31.935-37.097-31.935-20.482 0-37.104 14.428-37.104 31.935 0 71.872-28.924 121.673-79.19 177.4-5.727-16.518-11.752-32.917-18.341-49.315-5.153-12.939-19.188-21.455-34.945-21.455h-171.179v-109.719c0-17.627-16.619-31.931-37.093-31.931-20.489 0-37.104 14.424-37.104 31.931v109.719h-166.9c-15.757 0-29.796 8.635-34.949 21.455-7.733 19.105-15.612 39.698-23.345 61.762-59.014-58.067-90.816-115.265-90.816-192.932 0-17.63-16.619-31.935-37.1-31.935-20.478 0-37.097 14.431-37.097 31.935 0 106.759 50.856 191.458 141.948 263.946 0.436 0.25 0.861 0.493 1.294 0.862-11.029 43.276-18.763 61.872-19.624 109.822-5.011 306.363 268.739 444.196 281.487 452.086 12.748 7.886 29.509 8.013 42.399 0.496 13.319-7.893 307.828-146.219 287.484-453.937z" />
<glyph unicode="&#xe905;" glyph-name="_ic_" d="M532.213 917.793c270.336 0 489.739-219.448 489.739-489.739s-219.403-489.739-489.739-489.739c-270.291 0-489.739 219.448-489.739 489.739s219.448 489.739 489.739 489.739zM532.213 819.846c-216.198 0-391.791-175.594-391.791-391.791 0-216.242 175.594-391.791 391.791-391.791 216.242 0 391.791 175.549 391.791 391.791 0 216.198-175.549 391.791-391.791 391.791zM357.331 595.59c36.864 0 66.783-29.919 66.783-66.783s-29.919-66.783-66.783-66.783c-36.864 0-66.783 29.919-66.783 66.783s29.919 66.783 66.783 66.783zM707.139 595.59c36.864 0 66.783-29.919 66.783-66.783s-29.919-66.783-66.783-66.783c-36.864 0-66.783 29.919-66.783 66.783s29.919 66.783 66.783 66.783zM525.579 147.968c-18.788 0.312-37.443 2.226-55.83 6.233-49.375 10.73-95.054 34.905-134.189 66.56-4.808 3.873-10.552 9.171-16.518 14.915-9.661 8.771-14.959 21.37-14.47 34.415s6.678 25.199 16.963 33.258v0.089c17.007 13.267 41.094 12.288 56.988-2.271 0.668-0.579 1.291-1.158 1.87-1.647 37.398-33.525 84.324-58.813 135.213-62.152 10.819-0.712 21.727-0.401 32.545 0.846 20.97 2.404 41.45 8.459 60.728 17.052 27.871 12.377 52.981 29.607 76.177 49.197 17.675 14.915 43.854 13.713 60.104-2.76 0.223 0.089 0.312 0 0.356-0.089 8.771-8.815 13.401-20.925 12.822-33.347s-6.322-24.042-15.85-32.011c-6.367-5.298-12.778-10.463-19.322-15.449-38.957-29.651-83.033-53.382-130.805-65.002-16.651-4.007-33.525-6.367-50.577-7.48-5.387-0.223-10.774-0.356-16.206-0.356z" />
<glyph unicode="&#xe906;" glyph-name="_ic_2" horiz-adv-x="1219" d="M1196.31 537.963c-0.533-267.909-203.818-543.128-522.182-582.219-128.995-15.839-273.692-4.859-311.399 94.776s-70.193 112.946-136.245 94.613c-114.175-31.691-203.697 3.974-219.185 105.506-55.226 362.359 210.915 613.238 529.097 689.702 310.295 74.556 660.535-63.682 659.914-402.378zM543.74 846.435c-254.916-60.469-469.966-289.554-437.653-552.726 11.647-94.855 72.184-61.765 150.333-43.85 60.941 13.971 142.845-18.076 173.678-116.857 20.629-66.090 92.954-95.021 219.41-79.494 232.493 28.547 434.455 226.411 440.953 453.829 8.699 301.68-293.743 399.095-546.721 339.097zM858.331 584.582c-40.072-4.92-76.591 23.611-81.512 63.684s23.611 76.591 63.684 81.512c40.074 4.921 76.591-23.609 81.512-63.684 4.92-40.072-23.574-76.587-63.684-81.512zM696.668 147.461c-59.67-7.327-113.909 34.973-121.214 94.469s35.089 113.659 94.759 120.986c59.672 7.327 113.91-34.971 121.215-94.467s-35.089-113.661-94.761-120.988zM633.675 619.798c-40.072-4.92-76.591 23.611-81.512 63.684-4.921 40.074 23.611 76.591 63.684 81.512s76.591-23.609 81.512-63.684c4.92-40.072-23.574-76.587-63.684-81.512zM424.212 531.278c-40.074-4.921-76.591 23.611-81.512 63.684-4.921 40.074 23.609 76.591 63.684 81.512s76.591-23.609 81.512-63.684c4.92-40.072-23.574-76.587-63.684-81.512zM206.65 421.257c-4.921 40.074 23.609 76.591 63.684 81.512s76.591-23.609 81.512-63.684c4.921-40.074-23.574-76.587-63.684-81.512-40.074-4.921-76.591 23.609-81.512 63.684z" />
<glyph unicode="&#xe907;" glyph-name="_ic_3" horiz-adv-x="977" d="M826.182 1.862c0-25.693-20.852-46.545-46.545-46.545h-558.545c-25.693 0-46.545 20.852-46.545 46.545s20.852 46.545 46.545 46.545h558.545c25.693 0 46.545-20.852 46.545-46.545zM849.455 915.316c64.246 0 116.364-52.118 116.364-116.364v-558.545c0-64.246-52.118-116.364-116.364-116.364h-698.182c-64.246 0-116.364 52.118-116.364 116.364v558.545c0 64.246 52.118 116.364 116.364 116.364h698.182zM849.455 822.225h-698.182c-12.833 0-23.273-10.439-23.273-23.273v-558.545c0-12.833 10.439-23.273 23.273-23.273h698.182c12.833 0 23.273 10.439 23.273 23.273v558.545c0 12.833-10.439 23.273-23.273 23.273zM500.364 429.283l162.304 55.302c24.297 8.285 50.781-4.701 59.066-29.044 8.285-24.297-4.748-50.781-29.044-59.066l-176.221-60.044c-5.339-1.817-10.778-2.609-16.105-2.481-5.327-0.128-10.766 0.664-16.105 2.481l-176.221 60.044c-24.297 8.285-37.329 34.769-29.044 59.066 8.285 24.343 34.769 37.329 59.066 29.044l162.304-55.302zM500.364 705.369c5.327 0.125 10.766-0.669 16.105-2.486l176.221-60.044c24.297-8.285 37.329-34.769 29.044-59.066s-34.769-37.329-59.066-29.044l-162.304 55.302-162.304-55.302c-24.297-8.285-50.781 4.748-59.066 29.044s4.748 50.781 29.044 59.066l176.221 60.044c5.339 1.817 10.778 2.611 16.105 2.486z" />
<glyph unicode="&#xe908;" glyph-name="_ic_4" horiz-adv-x="922" d="M614.4 704v25.6l-307.2-128v-51.2h-102.4v153.6c0 141.385 114.615 256 256 256s256-114.615 256-256h-102.4zM460.8 857.6c-84.831 0-153.6-68.769-153.6-153.6v-102.4l307.2 128v-25.6c0 84.831-68.769 153.6-153.6 153.6zM153.6 601.6h614.4c84.831 0 153.6-68.769 153.6-153.6v-358.4c0-84.831-68.769-153.6-153.6-153.6h-614.4c-84.831 0-153.6 68.769-153.6 153.6v358.4c0 84.831 68.769 153.6 153.6 153.6zM153.6 499.2c-28.277 0-51.2-22.923-51.2-51.2v-358.4c0-28.277 22.923-51.2 51.2-51.2h614.4c28.277 0 51.2 22.923 51.2 51.2v358.4c0 28.277-22.923 51.2-51.2 51.2h-614.4zM409.6 205.699c-30.607 17.705-51.2 50.798-51.2 88.701 0 56.554 45.846 102.4 102.4 102.4s102.4-45.846 102.4-102.4c0-37.902-20.593-70.995-51.2-88.701v-64.899c0-28.277-22.923-51.2-51.2-51.2s-51.2 22.923-51.2 51.2v64.899z" />
<glyph unicode="&#xe909;" glyph-name="_ic_5" horiz-adv-x="1126" d="M136.805 691.302h-51.199c-28.262 0-51.2 22.938-51.2 51.2s22.938 51.2 51.2 51.2h257.161c-0.183 20.956 0.17 41.905 0.17 62.822 0.256 10.189 1.843 20.122 5.325 29.696 8.346 22.835 26.214 41.574 48.589 51.046 9.574 4.045 19.558 6.042 29.901 6.81 85.146 2.15 170.291 0.102 255.488 0.102 8.704-0.205 17.254-1.331 25.6-3.942 24.627-7.68 45.056-26.214 55.091-49.971 4.096-9.574 6.093-19.558 6.861-29.901 0.559-22.195 0.251-44.426 0.138-66.662h257.295c28.262 0 51.2-22.938 51.2-51.2s-22.938-51.2-51.2-51.2h-52.354c-0.285-25.207-0.346-50.415-0.382-75.622-0.154-55.91-0.102-111.821 0-167.731 0.256-127.078 0.87-254.157 1.485-381.235-0.051-3.635-0.051-3.635-0.256-7.219-0.87-9.677-2.714-19.098-5.939-28.262-13.261-37.376-45.67-65.792-82.022-79.974-7.68-3.021-15.565-5.427-23.654-7.117-8.243-1.741-16.589-2.662-24.986-2.97-187.494-2.406-374.989-0.051-562.483-0.051 0 0-18.739 1.075-27.955 3.021-8.038 1.69-15.923 4.096-23.552 7.066-37.427 14.643-70.707 44.39-83.149 83.302-3.021 9.37-4.557 18.944-5.069 28.774-3.57 209.292-0.546 418.673-0.103 628.019zM445.338 795.75h222.157v46.029h-222.157v-46.029zM277.248 43.52c187.187 0 374.989-15.821 561.459 0.154 2.048 0.205 3.994 0.563 5.99 1.075 8.448 2.253 16.538 6.502 22.784 12.646 2.458 2.406 5.325 5.581 6.042 9.114 5.222 32.666-0.307 66.15-0.461 99.226-0.307 73.677-0.563 147.354-0.819 221.030-0.256 98.048-0.512 196.096 0.154 294.144l0.051 6.707h-633.19v-620.186c0-0.512 0.051-0.922 0.154-1.434 1.28-4.147 4.762-7.68 7.936-10.445 7.731-6.656 17.971-11.366 28.262-11.981 0.819-0.051 0.819-0.051 1.638-0.051zM612.659 577.946v-425.83c0-14.131-11.469-25.6-25.6-25.6h-51.2c-14.131 0-25.6 11.469-25.6 25.6v425.83c0 14.131 11.469 25.6 25.6 25.6h51.2c14.131 0 25.6-11.469 25.6-25.6zM801.638 577.946v-425.83c0-14.131-11.469-25.6-25.6-25.6h-51.2c-14.131 0-25.6 11.469-25.6 25.6v425.83c0 14.131 11.469 25.6 25.6 25.6h51.2c14.131 0 25.6-11.469 25.6-25.6zM413.594 577.946v-425.83c0-14.131-11.469-25.6-25.6-25.6h-51.2c-14.131 0-25.6 11.469-25.6 25.6v425.83c0 14.131 11.469 25.6 25.6 25.6h51.2c14.131 0 25.6-11.469 25.6-25.6z" />
<glyph unicode="&#xe90a;" glyph-name="_ic_6" horiz-adv-x="922" d="M614.4 601.6v128l-307.2-128h307.2zM204.8 601.6v102.4c0 141.385 114.615 256 256 256s256-114.615 256-256v-102.4h51.2c84.831 0 153.6-68.769 153.6-153.6v-358.4c0-84.831-68.769-153.6-153.6-153.6h-614.4c-84.831 0-153.6 68.769-153.6 153.6v358.4c0 84.831 68.769 153.6 153.6 153.6h51.2zM460.8 857.6c-84.831 0-153.6-68.769-153.6-153.6v-102.4l307.2 128v-25.6c0 84.831-68.769 153.6-153.6 153.6zM153.6 499.2c-28.277 0-51.2-22.923-51.2-51.2v-358.4c0-28.277 22.923-51.2 51.2-51.2h614.4c28.277 0 51.2 22.923 51.2 51.2v358.4c0 28.277-22.923 51.2-51.2 51.2h-614.4zM409.6 205.699c-30.607 17.705-51.2 50.798-51.2 88.701 0 56.554 45.846 102.4 102.4 102.4s102.4-45.846 102.4-102.4c0-37.902-20.593-70.995-51.2-88.701v-64.899c0-28.277-22.923-51.2-51.2-51.2s-51.2 22.923-51.2 51.2v64.899z" />
<glyph unicode="&#xe90b;" glyph-name="_ic_7" horiz-adv-x="1229" d="M102.4 37.929c0 0.935 0.464 0.471 0.253 0.471h1023.493c-0.055 0 0.253 0.305 0.253-0.471v820.143l-1023.747-0.471-0.253-819.671zM0 858.071c0 56.294 46.67 101.929 102.653 101.929h1023.493c56.694 0 102.653-46.66 102.653-101.929v-820.143c0-56.294-46.67-101.929-102.653-101.929h-1023.493c-56.694 0-102.653 46.66-102.653 101.929v820.143zM787.973 493.529c47.975-28.972 47.591-76.175 0-104.915l-235.869-142.44c-47.975-28.972-86.866-6.803-86.866 50.047v289.702c0 56.612 39.274 78.787 86.866 50.047l235.869-142.44z" />
<glyph unicode="&#xe90c;" glyph-name="_ic_1" horiz-adv-x="1109" d="M586.293 277.327c-56.066-0.030-112.011-10.501-164.183-31.097-52.045-20.557-100.105-50.944-141.047-89.079-39.518-36.804-72.397-80.683-96.418-129.041-9.975-20.079-18.432-40.9-25.284-62.234-5.606-17.715-22.084-29.722-40.661-29.636-0.188-0.094-0.367-0.094-0.546-0.094-13.517 0.060-26.206 6.528-34.176 17.442-7.979 10.914-10.291 24.969-6.238 37.862 10.351 31.71 23.501 62.515 39.433 91.836 56.414 103.817 147.354 187.409 255.582 234.812 10.154 4.448 20.444 8.571 30.852 12.365-46.495 29.624-85.683 70.424-113.224 118.315-18.065 31.403-31.078 65.673-38.34 101.171-7.535 36.813-8.934 74.846-4.198 112.119 4.258 33.485 13.542 66.295 27.452 97.050 16.956 37.478 40.738 71.774 69.82 100.864 29.073 29.082 63.394 52.873 100.864 69.828 41.335 18.697 86.332 28.937 131.678 30.080 45.653 1.152 91.426-6.827 133.914-23.595 38.349-15.138 73.839-37.291 104.337-65.015 30.387-27.614 55.757-60.698 74.479-97.237 15.3-29.867 26.146-61.986 32.051-95.027 6.11-34.185 6.972-69.308 2.594-103.748-4.258-33.485-13.542-66.304-27.452-97.050-27.337-60.438-72.438-112.176-128.282-147.753 2.244-0.818 4.483-1.652 6.716-2.502 62.285-23.697 119.927-59.213 169.242-104.021 47.522-43.196 87.177-94.925 116.471-152.073 13.278-25.899 24.397-52.89 33.254-80.597 4.053-12.877 1.732-26.914-6.255-37.803-7.987-10.88-20.676-17.314-34.176-17.314-0.188-0.154-0.375-0.154-0.555-0.154-18.569 0.043-34.961 12.117-40.508 29.833-10.129 31.684-23.851 62.208-40.789 90.846-48.683 82.338-123.725 148.113-211.823 185.412-53.265 22.554-110.814 34.475-168.636 35.2-1.883 0.024-3.767 0.036-5.65 0.036-0.051-0.001-0.101-0.001-0.152-0.002-0.048 0.001-0.095 0.001-0.143 0.002zM586.436 362.667c36.378 0.461 72.047 7.578 105.284 22.605 28.117 12.723 53.871 30.592 75.691 52.42 21.828 21.82 39.689 47.573 52.412 75.699 10.419 23.014 17.365 47.582 20.548 72.644 3.558 27.989 2.526 56.585-3.14 84.224-15.898 77.577-68.617 144.794-139.895 179.166-30.507 14.711-63.889 23.185-97.707 24.9-34.313 1.741-68.898-3.371-101.163-15.198-29.056-10.641-56.115-26.641-79.497-46.908-23.287-20.181-42.923-44.535-57.643-71.62-11.964-22.007-20.659-45.781-25.677-70.332-5.231-25.54-6.519-51.866-3.883-77.807 2.56-25.216 8.9-50.022 18.782-73.37 21.7-51.277 60.305-94.754 108.553-122.513 23.509-13.525 49.169-23.262 75.733-28.706 10.547-2.159 21.163-3.499 31.872-4.454 6.588-0.418 13.133-0.666 19.729-0.751z" />
<glyph unicode="&#xe90d;" glyph-name="_btn_7" horiz-adv-x="1117" d="M278.938 602.833c0.289-34.323 0.531-68.655 0.531-102.977 1.238-5.12 1.452-10.482 2.579-15.649 2.56-11.702 6.991-22.938 12.763-33.41 15.602-28.281 40.336-50.79 67.286-68.049 50.12-32.098 109.149-47.337 168.029-51.768 9.542-0.559 19.056-0.866 28.616-0.95 16.57 0.149 33.075 0.94 49.543 2.877 56.785 6.656 114.046 24.92 160.489 59.010 24.762 18.181 46.936 41.491 59.355 69.921 3.146 7.196 5.632 14.69 7.308 22.37 0.27 1.21 0.549 16.151 0.829 39.88-2.197 59.569-0.4 119.333 1.285 179.005 0.289 58.517 0.465 117.239 0.465 159.744l-0.009 0.549c-185.921 4.738-371.963 0.009-557.94 0.009l-0.577-0.009c-1.424-55.771-1.536-111.56-1.247-167.35 0.503-31.064 0.745-62.138 0.698-93.203v0zM931.551 590.108c0-20.527-0.009-39.964-0.009-55.715 6.889 0.931 13.75 2.206 20.536 3.705 5.343 1.182 8.22 1.946 13.517 3.416 4.217 1.164 8.387 2.551 12.493 4.068 9.747 3.612 19.391 8.145 27.629 14.559 5.53 4.301 10.435 9.588 13.247 16.086 1.89 4.347 2.616 8.918 2.96 13.619 1.126 48.612 0.047 145.873 0.047 145.873-28.113 0.084-82.423 0.009-89.609 0-0.019-48.528-0.456-97.066-0.81-145.613v0zM183.929 735.805c-30.245 0-90.019-0.084-90.019-0.084s-1.071-97.261 0.047-145.873c0.344-4.701 1.080-9.272 2.96-13.619 2.811-6.498 7.717-11.785 13.247-16.086 8.248-6.414 17.883-10.947 27.639-14.559 4.105-1.517 8.276-2.904 12.493-4.068 6.721-1.862 6.703-1.806 13.517-3.416 6.814-1.406 13.629-2.774 20.527-3.705v30.441c-1.071 56.972-1.071 113.981-0.41 170.971v0zM616.001 120.725h152.362c12.753 0 23.105-10.352 23.105-23.105v-46.22c0-12.763-10.352-23.114-23.105-23.114h-419.235c-12.753 0-23.114 10.352-23.114 23.114v46.22c0 12.753 10.361 23.105 23.114 23.105h174.434v117.471c-11.227 0.726-22.416 1.806-33.597 3.305-16.477 2.206-32.861 5.241-49.031 9.114-13.089 3.137-26.047 6.824-38.81 11.087-12.428 4.152-24.669 8.853-36.669 14.113-65.834 28.858-127.125 76.288-158.525 142.401-3.249 6.861-6.163 13.88-8.685 21.039-1.368 0.102-2.728 0.214-4.096 0.335-10.845 0.959-21.662 2.299-32.405 4.105-53.518 9.030-111.030 30.329-141.275 78.448-4.608 7.326-8.471 15.127-11.487 23.245-4.803 12.949-7.028 26.261-8.034 39.992-1.192 51.619-1.322 103.284-0.047 154.913 0.698 9.281 2.243 18.274 5.399 27.062 8.62 24.036 27.164 43.948 50.632 54.067 10.091 4.357 20.61 6.526 31.53 7.363 32.349 0.875 64.726 0.912 97.085 0.112 0.289 13.089 0.605 26.168 0.931 39.256 0.363 4.71 0.354 4.673 0.959 9.393 1.638 9.114 4.096 17.864 8.127 26.233 10.435 21.672 29.305 38.8 51.907 47.067 8.834 3.23 17.901 4.831 27.248 5.539 189.291 4.822 378.759 4.822 568.041 0 9.356-0.707 18.423-2.309 27.257-5.539 24.055-8.797 43.799-27.62 53.769-51.209 4.273-10.1 6.377-20.592 7.215-31.483 0.317-13.079 0.559-26.149 0.754-39.229 31.884 0.763 63.786 0.717 95.66-0.14 10.92-0.838 21.448-3.007 31.539-7.363 23.459-10.119 42.012-30.031 50.632-54.067 3.146-8.788 4.701-17.78 5.399-27.062 1.219-49.45 0.102-98.918 0.102-148.387-0.317-13.703-1.936-27.108-6.042-40.243-2.616-8.341-6.097-16.393-10.37-24.027-3.081-5.502-6.591-10.771-10.445-15.76-29.975-38.772-78.504-57.512-125.179-66.569-8.574-1.666-17.203-2.998-25.87-4.077-5.995-0.754-11.999-1.35-18.013-1.825-3.286-9.374-7.131-18.516-11.702-27.425-35.933-70.060-104.904-117.937-177.171-144.989-12.465-4.664-25.153-8.76-37.99-12.307-15.853-4.385-31.939-7.931-48.165-10.668-9.346-1.573-18.73-2.849-28.141-3.873v-119.417z" />
<glyph unicode="&#xe90e;" glyph-name="_btn_6" d="M977.548 401.419c25.656 0 46.452-20.798 46.452-46.455v-378.485c-0.531-4.068-1.341-7.95-2.942-11.749-6.721-15.975-22.407-25.211-38.931-27.976l-2.188-0.298-4.45-0.4c-308.112-0.019-616.234-0.037-924.346-0.056-5.241 0.251-10.37 0.661-15.462 1.983-13.861 3.612-26.661 12.754-32.638 26.021-1.787 3.966-2.513 8.183-3.044 12.475v943.108c0.531 4.068 1.341 7.941 2.942 11.749 6.721 15.975 22.407 25.211 38.931 27.976l2.188 0.289 4.45 0.4h412.197c28.328 0 51.293-22.958 51.293-51.287v-0.102c0-11.060-4.394-21.664-12.214-29.484-7.82-7.829-18.432-12.224-29.491-12.224h-377.204v-837.806l837.818 0.056v325.811c0 25.657 20.797 46.455 46.452 46.455h0.186zM930.909 811.417l-446.175-446.204c-18.162-18.172-47.663-18.172-65.825 0-18.162 18.163-18.162 47.656 0 65.829l435.842 435.861h-203.115c-25.693 0-46.545 20.863-46.545 46.548 0 25.695 20.852 46.548 46.545 46.548h325.818c8.881 0 17.194-2.486 24.25-6.815 13.368-8.183 22.295-22.92 22.295-39.734v-372.387c0-25.685-20.852-46.548-46.545-46.548s-46.545 20.863-46.545 46.548v270.353z" />
<glyph unicode="&#xe90f;" glyph-name="_btn_4" horiz-adv-x="1331" d="M422.703 285.647c-32.502-3.389-64.532-11.141-94.976-23.153-40.684-16.056-78.367-39.588-110.735-69.007-32.266-29.348-59.238-64.471-79.124-103.291-9.718-18.975-21.617-62.628-29.757-97.966-5.734-28.641-30.884-49.254-60.099-49.254-0.266-0.563-0.532-0.563-0.799-0.563-13.66-0.031-26.655 5.868-35.625 16.169-8.97 10.291-13.025 23.972-11.131 37.489 5.468 33.188 15.565 77.251 36.475 120.504 24.371 50.412 55.46 97.731 95.058 137.308 35.512 35.502 76.739 65.219 121.672 87.613-18.637 12.411-36.045 26.655-51.876 42.496-28.744 28.754-52.275 62.669-69.018 99.717-13.752 30.413-22.938 62.853-27.136 95.959-4.68 36.844-3.308 74.445 4.147 110.828 8.284 40.417 24.095 79.186 46.346 113.92 33.618 52.46 81.818 95.191 137.943 122.255 40.264 19.415 84.326 30.618 128.973 32.891 45.22 2.304 90.808-4.485 133.325-20.070 38.318-14.049 73.984-35.113 104.817-61.839 30.648-26.563 56.474-58.614 75.837-94.249 15.811-29.082 27.279-60.488 33.925-92.908 6.318-30.812 8.274-62.495 5.878-93.85-2.56-33.485-10.127-66.54-22.446-97.792-22.835-57.897-61.891-108.728-111.442-146.094 47.555-20.347 91.628-48.712 129.894-83.507 41.359-37.601 74.189-83.507 101.376-132.352 34.99-62.874 46.705-108.216 50.207-140.052 0.717-13.957-4.332-27.597-13.957-37.734-9.626-10.127-22.979-15.862-36.956-15.862-0.031-0.84-0.051-0.84-0.082-0.84-29.368 0.031-54.62 20.797-60.314 49.613-5.775 29.624-14.336 64.512-22.405 82.34-18.002 39.782-43.264 76.227-74.148 107.090-30.894 30.884-67.308 56.156-107.11 74.168-41.472 18.77-86.426 29.471-131.881 31.601-3.748-0.42-7.516-0.799-11.295-1.137-8.643-0.543-17.244-0.87-25.897-0.983-5.908 0.082-11.796 0.246-17.664 0.543v0zM849.455 287.541c-2.171 0.031-4.28 0.696-6.072 1.925-23.183 15.729-34.202 33.219-38.359 49.388-2.939 20.675 9.062 40.571 28.723 47.626 15.032 3.379 33.393 1.239 33.28 2.068 22.231 3.031 38.103 10.363 58.767 19.712 64.297 29.102 113.408 87.163 131 155.556 6.932 26.972 8.98 55.132 6.175 82.831-2.335 23.132-8.161 45.906-17.224 67.308-11.069 26.122-26.9 50.186-46.479 70.717-19.548 20.49-42.772 37.458-68.291 49.756-20.623 9.933-71.137 23.695-99.43 30.126-14.193 1.434-27.832 6.257-39.772 14.070-0.369 1.106-1.116 1.618-1.853 2.14-15.073 10.373-21.862 29.184-16.896 46.776 4.966 17.603 20.593 30.085 38.851 31.048-0.051 0.973-0.041 0.973-0.041 0.973 45.22 2.304 90.808-4.485 133.325-20.070 38.318-14.049 73.984-35.113 104.817-61.839 30.648-26.563 56.474-58.614 75.837-94.249 15.811-29.082 27.279-60.488 33.925-92.908 6.318-30.812 8.274-62.495 5.878-93.85-2.56-33.485-10.127-66.54-22.446-97.792-22.835-57.897-61.891-108.728-111.442-146.094 47.555-20.347 91.628-48.712 129.894-83.507 41.359-37.601 74.189-83.507 101.376-132.352 34.99-62.874 46.705-108.216 50.207-140.052 0.717-13.957-4.332-27.597-13.957-37.734-9.626-10.127-22.979-15.862-36.956-15.862-0.031-0.84-0.051-0.84-0.082-0.84-29.368 0.031-54.62 20.797-60.314 49.613-5.775 29.624-14.336 64.512-22.405 82.34-18.002 39.782-43.264 76.227-74.148 107.090-30.894 30.884-67.308 56.156-107.11 74.168-38.031 17.213-129.352 30.044-148.777 31.918v0zM420.942 388.354c9.165 0.778 18.36 1.29 27.566 1.526 7.967 0.195 15.933 0.195 23.9-0.010 22.231 3.031 43.93 9.042 64.594 18.391 64.297 29.102 113.408 87.163 131 155.556 6.932 26.972 8.98 55.132 6.175 82.831-2.335 23.132-8.161 45.906-17.224 67.308-11.069 26.122-26.9 50.186-46.479 70.717-19.548 20.49-42.772 37.458-68.291 49.756-28.017 13.496-58.644 21.279-89.702 22.856-31.498 1.608-63.252-3.092-92.877-13.947-26.696-9.779-51.517-24.474-73.001-43.080-21.391-18.524-39.414-40.899-52.92-65.761-10.988-20.204-18.964-42.035-23.583-64.563-4.403-21.494-5.755-43.612-4.086-65.495 5.724-74.967 48.394-143.872 112.579-182.917 29.85-18.156 63.078-28.826 97.71-32.788 1.546-0.143 3.092-0.266 4.639-0.379v0z" />
<glyph unicode="&#xe910;" glyph-name="_btn_5" horiz-adv-x="853" d="M42.613-64c-5.036 0.119-9.917 0.845-14.662 2.586-11.692 4.284-21.14 13.731-25.417 25.414-1.485 4.045-2.21 8.192-2.534 12.468v943.116c1.229 16.231 10.822 30.688 26.013 37.114 4.617 1.954 9.423 2.927 14.407 3.303h772.494c4.984-0.375 9.789-1.348 14.407-3.303 15.191-6.426 24.784-20.882 26.013-37.114v-943.116c-1.229-16.231-10.822-30.688-26.013-37.114-4.617-1.954-9.423-2.927-14.407-3.303-262.061-0.017-513.531-0.051-770.301-0.051v0zM85.286 192.015v-170.677h682.762v170.677h-682.762zM426.667 149.346c23.555 0 42.673-19.124 42.673-42.669 0-23.553-19.117-42.669-42.673-42.669s-42.673 19.116-42.673 42.669c0 23.545 19.117 42.669 42.673 42.669v0zM85.286 277.353h682.762v597.368h-682.762v-597.368z" />
<glyph unicode="&#xe911;" glyph-name="_btn_3" horiz-adv-x="788" d="M400.664 829.092c20.788-35.794 32.943-84.046 32.943-135.903 0-105.934-49.302-186.734-98.609-186.734-35.915 0-74.305 45.007-90.631 117.507-7.384 32.791-49.806 41.858-69.95 14.952-85.648-114.4-135.032-226.004-135.032-333.165 0-183.787 168.808-330.365 374.473-330.365 205.687 0 374.5 146.573 374.5 330.365 0 138.366-60.453 273.788-160.917 401.704-60.701 77.288-122.478 136.041-168.271 172.297-34.095 26.994-80.345-13.052-58.505-50.658zM565.493 658.801c90.556-115.302 144.095-235.235 144.095-353.051 0-137.621-131.268-251.595-295.731-251.595-164.44 0-295.704 113.978-295.704 251.595 0 69.104 27.136 144.59 76.657 223.913 31.734-62.136 81.527-101.975 140.188-101.975 103.139 0 177.378 121.67 177.378 265.503 0 9.894-0.358 19.709-1.062 29.41 17.795-19.392 36.047-40.713 54.178-63.799z" />
<glyph unicode="&#xe912;" glyph-name="_btn_8" horiz-adv-x="1229" d="M307.253 567.456c0.318-37.722 0.584-75.455 0.584-113.177 1.364-5.627 1.6-11.52 2.84-17.199 2.82-12.861 7.701-25.21 14.058-36.72 17.186-31.082 44.431-55.821 74.116-74.79 55.208-35.277 120.229-52.025 185.086-56.895 10.51-0.614 20.99-0.951 31.521-1.044 18.252 0.164 36.433 1.033 54.572 3.161 62.55 7.315 125.623 27.389 176.78 64.855 27.276 19.981 51.701 45.6 65.38 76.846 3.466 7.909 6.204 16.145 8.049 24.585 0.297 1.33 0.605 17.751 0.913 43.83-2.42 65.469-0.441 131.153 1.415 196.735 0.318 64.313 0.513 128.851 0.513 175.567l-0.010 0.604c-204.794 5.208-409.722 0.010-614.578 0.010l-0.636-0.010c-1.569-61.295-1.692-122.61-1.374-183.925 0.554-34.141 0.82-68.293 0.769-102.434v0zM1026.116 553.47c0-22.56-0.010-43.922-0.010-61.233 7.588 1.023 15.145 2.425 22.621 4.072 5.886 1.299 9.054 2.138 14.889 3.755 4.645 1.279 9.239 2.803 13.761 4.471 10.736 3.97 21.359 8.952 30.434 16.002 6.091 4.727 11.495 10.538 14.592 17.679 2.082 4.778 2.881 9.801 3.261 14.968 1.241 53.427 0.051 160.322 0.051 160.322-30.967 0.092-90.79 0.010-98.706 0-0.021-53.335-0.502-106.68-0.892-160.036v0zM202.6 713.598c-33.316 0-99.157-0.092-99.157-0.092s-1.179-106.895 0.051-160.322c0.379-5.167 1.189-10.19 3.261-14.968 3.097-7.141 8.501-12.953 14.592-17.679 9.085-7.049 19.698-12.032 30.444-16.002 4.522-1.668 9.116-3.192 13.761-4.471 7.403-2.046 7.383-1.985 14.889-3.755 7.506-1.545 15.012-3.049 22.61-4.072v33.456c-1.179 62.615-1.179 125.27-0.451 187.905v0zM678.533 37.595h167.829c14.048 0 25.451-11.377 25.451-25.394v-50.798c0-14.027-11.403-25.404-25.451-25.404h-461.793c-14.048 0-25.461 11.377-25.461 25.404v50.798c0 14.017 11.413 25.394 25.461 25.394h192.141v129.107c-12.366 0.798-24.692 1.985-37.007 3.632-18.15 2.425-36.197 5.76-54.008 10.016-14.417 3.448-28.691 7.499-42.749 12.185-13.689 4.563-27.173 9.73-40.391 15.51-72.517 31.717-140.030 83.844-174.617 156.506-3.579 7.54-6.788 15.255-9.567 23.122-1.507 0.113-3.004 0.235-4.512 0.368-11.946 1.054-23.861 2.527-35.694 4.512-58.951 9.924-122.3 33.333-155.616 86.218-5.076 8.052-9.331 16.626-12.654 25.547-5.291 14.232-7.742 28.862-8.849 43.953-1.313 56.732-1.456 113.515-0.051 170.257 0.769 10.2 2.471 20.084 5.947 29.742 9.495 26.417 29.921 48.301 55.772 59.423 11.115 4.788 22.703 7.172 34.731 8.093 35.633 0.962 71.297 1.003 106.94 0.123 0.318 14.385 0.667 28.76 1.025 43.145 0.4 5.177 0.39 5.136 1.056 10.323 1.805 10.016 4.512 19.634 8.952 28.831 11.495 23.818 32.28 42.643 57.177 51.729 9.731 3.55 19.719 5.31 30.014 6.088 208.506 5.3 417.208 5.3 625.704 0 10.305-0.778 20.293-2.537 30.024-6.088 26.497-9.668 48.245-30.356 59.228-56.282 4.707-11.101 7.024-22.631 7.947-34.602 0.349-14.375 0.615-28.739 0.831-43.114 35.12 0.839 70.261 0.788 105.371-0.153 12.028-0.921 23.625-3.305 34.741-8.093 25.84-11.121 46.277-33.006 55.772-59.423 3.466-9.658 5.178-19.541 5.947-29.742 1.343-54.348 0.113-108.716 0.113-163.085-0.349-15.060-2.133-29.793-6.655-44.229-2.881-9.167-6.716-18.017-11.423-26.407-3.394-6.047-7.26-11.837-11.505-17.321-33.018-42.613-86.473-63.208-137.887-73.163-9.444-1.831-18.95-3.294-28.496-4.481-6.604-0.829-13.218-1.484-19.842-2.005-3.62-10.303-7.855-20.35-12.889-30.141-39.581-77-115.553-129.618-195.156-159.35-13.73-5.126-27.707-9.628-41.847-13.526-17.463-4.819-35.182-8.717-53.055-11.725-10.295-1.729-20.631-3.131-30.998-4.256v-131.245z" />
<glyph unicode="&#xe913;" glyph-name="_btn_9" d="M170.667 960h682.667c94.257 0 170.667-76.41 170.667-170.667v-682.667c0-94.257-76.41-170.667-170.667-170.667h-682.667c-94.257 0-170.667 76.41-170.667 170.667v682.667c0 94.257 76.41 170.667 170.667 170.667zM176.873 866.909c-46.271 0-83.782-37.51-83.782-83.782v-670.255c0-46.271 37.51-83.782 83.782-83.782h670.255c46.271 0 83.782 37.51 83.782 83.782v670.255c0 46.271-37.51 83.782-83.782 83.782h-670.255zM512.013 773.818c-162.481 0-297.913-114.296-325.080-264.217-5.24-28.883 17.586-55.394 47.868-55.394 23.647 0 43.814 16.474 47.894 39.020 19.137 105.775 114.678 186.417 229.317 186.417 114.626 0 210.154-80.641 229.291-186.417 4.080-22.546 24.26-39.020 47.894-39.020 30.283 0 53.109 26.51 47.868 55.394-27.154 149.921-162.572 264.217-325.054 264.217v0zM571.431 387.49c-13.675 4.822-27.689 5.958-41.233 4.519l-102.163 140.794c-15.435 21.271-45.77 26.409-67.735 11.462-21.979-14.947-27.271-44.322-11.837-65.606l105.214-145.010c-16.738-45.85 7.665-96.282 54.947-112.984 47.568-16.79 100.182 6.93 117.533 52.995 17.338 46.090-7.157 97.040-54.725 113.829z" />
</font></defs></svg>`);

icons.map(icon => {
    fs.writeFileSync(`./test/${icon.name}.svg`, icon.source);
})