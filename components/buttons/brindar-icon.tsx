const BrindarIcon = ({ className = '' }: { className?: string }) => {
  return (
    <svg
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      width="30"
      x="0"
      y="0"
      version="1.1"
      viewBox="0 0 1024 1024"
      xmlSpace="preserve"
    >
      <path
        d="M491.557 818.283c-.205-4.105-.685-7.78-.463-11.41.285-4.664-1.635-6.136-6.12-5.992-23.996.769-46.455-5.362-67.947-15.586-3.607-1.716-7.19-3.508-10.655-5.49-2.413-1.379-4.072-1.2-6.023.958-13.527 14.957-30.679 20.715-50.563 20.599-46.827-.273-93.656-.1-140.485-.12-4.161-.002-8.308 0-12.44-.819-12.91-2.556-20-10.973-20.01-24.138-.034-47.829-.042-95.658-.044-143.486 0-34.997.009-69.994.045-104.99.01-9.545 2.683-17.74 11.73-22.664 3.953-2.15 8.182-2.477 12.56-2.61 38.319-1.163 76.647-.525 114.967-.398 8.239.027 14.355-2.484 19.913-8.081 20.429-20.57 41.888-40.156 61.051-61.931 17.868-20.303 27.53-44.098 27.672-71.519.062-11.946-1.202-23.959 1.618-35.83 4.726-19.895 20.324-34.341 40.44-37.112 32.178-4.432 59.023 16.082 62.466 48.466 3.02 28.414 1.057 56.475-8.569 83.686-.673 1.902-2.087 3.874-.902 6.094 1.374.379 1.91-.661 2.507-1.373 6.227-7.437 12.908-14.56 20.8-20.092 6.41-4.492 7.929-10.358 8.6-17.35 2.414-25.133 5.684-50.17 8.64-75.241 2.623-22.26 5.308-44.507 8.259-66.724.449-3.383-.277-5.89-3.538-7.956-6.944-4.4-10.438-10.996-10.45-19.308-.015-10-.08-19.999-.014-29.997.133-19.97 15.692-36.92 35.686-39.244 11.142-1.295 22.297-.543 33.444-.664 16.663-.18 33.33-.09 49.994-.101 22.491-.014 40.047 12.888 44.033 33.77 2.56 13.412 2.267 27.216.31 40.783-.94 6.515-4.814 11.687-10.595 15.052-2.223 1.293-2.737 2.651-2.446 5.217 3.149 27.711 6.118 55.443 9.15 83.168 2.382 21.781 4.813 43.557 7.15 65.343.478 4.469 2 7.738 5.929 10.705 23.113 17.453 40.169 39.183 46.557 68.185 1.553 7.054 1.368 14.216 2.09 21.315.365 3.583 1.904 4.435 5.1 4.35 11.37-.305 22.565.3 33.3 4.878 32.231 13.747 42.617 56.664 19.794 82.426-2.19 2.472-4.59 4.76-7.38 7.635 13.65 13.16 20.267 29.26 16.842 48.448-3.419 19.158-14.64 32.42-32.198 39.922-.566 2.343.803 3.586 1.542 4.995 16.233 30.97.212 68.114-33.473 77.208-3.318.896-4.147 2.463-4.128 5.579.094 15.497.37 31.006-.06 46.493-.785 28.32-18.97 57.111-49.772 65.173-4.188 1.096-8.413 1.867-12.793 1.882-36.824.124-73.648.38-110.472.46-14.493.03-28.99-.584-43.478-.38-23.893.337-41.846-10.163-55.323-29.277-6.867-9.74-10.789-20.576-11.848-32.907m35.822 5.75c5.442 13.485 14.741 22.63 29.817 22.714 50.994.284 101.991.018 152.987-.01 2.896 0 5.61-.627 8.243-1.737 12.604-5.313 19.94-15.206 22.102-28.241 2.762-16.652.757-33.578 1.193-50.377.082-3.153-1.8-3.992-4.49-3.962-8.327.094-16.657.073-24.98.304-15.33.425-30.742 1.307-45.935-.697-21-2.77-35.432-15.062-42.645-34.729-6.974-19.012-3.35-36.676 9.919-52.205 1.351-1.582 3.312-2.824 3.685-5.386-12.07-10.687-18.81-24.022-18.528-40.348.277-16.094 6.444-29.689 19.144-39.988-1.291-1.515-1.992-2.433-2.79-3.258-15.83-16.38-19.034-35.282-10.79-56.18 8.283-20.997 28.316-34.126 51.772-34.224 19.499-.08 38.998.008 58.497.034 8.428.012 8.75-.478 8.002-8.713-1.608-17.714-9.08-32.497-21.768-44.815-7.89-7.66-15.7-15.403-23.486-23.17-4.608-4.597-7.745-10.101-8.526-16.594-1.528-12.704-2.778-25.442-4.132-38.167-1.794-16.855-3.494-33.72-5.386-50.564-2.45-21.796-5.28-43.552-7.417-65.377-.513-5.23-2.443-6.312-7.107-6.255-17.163.212-34.33.115-51.496.133-14.337.016-10.904-1.32-12.764 12.16-2.656 19.244-4.256 38.633-6.42 57.947-2.864 25.58-6.24 51.109-8.61 76.732-1.376 14.89-5.606 27.755-17.315 37.838-7.177 6.18-13.6 13.248-20.219 20.057-15.028 15.46-22.369 34.424-22.452 55.592-.401 102.16-.313 204.322-.425 306.484-.005 4.87.459 9.635 2.32 15.003M299.391 567.5c.16 31.973.464 63.946.443 95.919-.022 33.145-.78 66.288-.336 99.438.056 4.155 1.282 5.104 5.022 5.064 15.992-.173 31.986-.188 47.98-.2 6.749-.005 12.709-2.215 18.14-6.081 5.652-4.023 9.842-9.448 13.97-14.876 3.945-5.187 8.971-7.985 15.442-7.412 4.545.403 8.39 2.933 12.366 5.081 22.348 12.076 44.895 23.499 71.424 22.52 7.794-.289 7.82.104 7.816-7.467-.027-44.306-.077-88.612-.085-132.917-.007-41.48.033-82.958.027-124.437 0-2.043.347-4.254-1.512-6.12-1.724 1.487-3.127 2.917-4.74 4.047-4.641 3.253-9.668 5.324-15.46 3.792-10.295-2.724-14.598-12.785-10.086-23.478a12254.741 12254.741 0 0117.926-42.297c12.68-29.739 21.242-60.27 18-93.082-.278-2.806-.515-5.648-1.166-8.38-2.383-10.014-11.773-17.292-20.59-16.143-10.032 1.307-15.841 8.669-15.753 20.264.031 4.154.664 8.3.758 12.457.89 39.175-11.435 73.698-37.383 103.018-20.1 22.714-42.22 43.503-63.882 64.703-8.537 8.354-18.968 13.246-31.042 14.646-7.334.851-14.642.566-21.952.455-4.16-.063-5.535 1.37-5.406 5.498.26 8.322.08 16.658.08 25.988M232.5 536.042c-5.661.016-11.326.156-16.983.005-3.708-.1-5.31 1.007-5.303 5.11.113 73.935.113 147.871.041 221.807-.003 3.676 1.186 4.973 4.883 4.936 15.65-.16 31.305-.18 46.956-.063 3.733.028 4.95-1.414 4.906-5.011-.135-10.989-.038-21.98-.043-32.97-.029-62.113-.057-124.225-.098-186.338-.005-7.65-.038-7.65-7.882-7.613-8.492.04-16.985.081-26.477.137m423.962 80.994c-9.447 17.02.32 33.645 19.777 33.647 37.467.004 74.934.02 112.401-.017 12.431-.012 21.858-8.845 22.034-20.474.181-11.961-9.069-21.737-21.35-21.784a14285.53 14285.53 0 00-115.398.05c-6.691.03-12.72 2.431-17.464 8.578m1.977-79.043c-4.832 7.006-5.965 14.394-1.851 22.077 4.307 8.042 10.975 11.944 20.314 11.895 32.81-.169 65.62-.069 98.432-.088 5.994-.004 12.008.2 17.98-.198 11.418-.761 19.737-10.352 19.43-21.957-.286-10.817-9.285-19.48-20.607-19.494-38.973-.045-77.946.055-116.919-.002-6.614-.01-11.922 2.463-16.779 7.767M696.5 728.787c23.3-.036 46.602-.107 69.903-.073 3.983.005 7.54-.93 10.758-3.265 7.406-5.372 10.437-14.364 7.718-22.98-3.179-10.07-10.636-16.12-20.344-16.14-29.46-.06-58.918.03-88.377-.05-4.59-.013-8.445 1.75-12.102 4.074-7.45 4.735-11.487 15.508-9.044 23.603 2.85 9.447 9.932 14.688 20.017 14.762 6.823.05 13.647.047 21.471.069M588.153 194.7c.021 3.66.021 7.321.076 10.98.019 1.31-.238 3.131 1.168 3.56 3.71 1.133 7.6.702 11.356.187 2.507-.344 2.119-3.121 2.724-4.883 2.007-5.842 6.14-9.287 11.549-9.318 5.795-.034 11.622 3.57 12.61 9.376.869 5.096 3.381 5.715 7.458 5.318 1.65-.16 3.327-.084 4.989-.037 2.7.077 4.117-.842 4.703-3.834 1.417-7.244 5.024-10.276 11.745-10.682 6.172-.372 10.925 2.913 12.801 9.571 1.03 3.652 2.685 5.389 6.562 4.859 1.629-.223 3.323-.022 4.984.055 2.766.127 3.894-1.205 3.862-3.913-.053-4.491.121-8.986.034-13.475-.142-7.26-3.015-10.185-10.174-10.888-5.676-.558-11.29.45-16.942.433-19.12-.06-38.24-.072-57.36-.056-9.14.008-11.834 2.681-12.145 12.747zM350.798 240.815c2.163-4.91 4.062-9.53 6.294-13.983 1.78-3.552 4.331-6.37 8.857-6.151 4.355.21 6.339 3.38 7.925 6.716 2.07 4.35 3.921 8.817 5.634 13.322 1.366 3.594 3.581 5.254 7.55 4.983a44.928 44.928 0 0116.739 2.019c7.712 2.458 9.613 9.235 4.046 15.004-4.027 4.174-8.545 7.91-13.085 11.54-2.568 2.053-3.239 4.141-2.452 7.283 1.126 4.498 1.979 9.084 2.635 13.677 1.195 8.372-4.88 13.422-12.906 10.972-4.691-1.432-8.814-3.914-12.721-6.755-3.1-2.253-5.829-2.455-8.99.042-3.398 2.683-7.308 4.645-11.389 6.131-8.201 2.987-13.075-.388-13.303-8.974-.13-4.881.544-9.682 2.047-14.239 1.2-3.637.229-5.951-2.493-8.224-3.83-3.197-7.668-6.421-11.166-9.966-7.496-7.596-5.539-14.338 4.807-16.86a62.045 62.045 0 0113.794-1.763c3.351-.05 6.803-.341 8.177-4.774z"
        opacity="1"
      ></path>
      <path
        d="M340.459 387.481c-1.682 1.402-3.06 2.614-4.521 3.715-2.059 1.552-2.925 3.295-2.208 6.025.666 2.54.848 5.255.892 7.898.127 7.649-4.788 11.756-11.618 8.314-7.744-3.902-14.035-4.49-21.858.056-6.18 3.591-11.342-.743-11.458-8.079-.013-.832-.21-1.766.09-2.48 3.419-8.178-.99-12.943-7.213-17.047-2.102-1.387-3.774-3.29-4.71-5.694-1.71-4.395-.083-8.44 4.258-10.23 3.395-1.4 6.977-2.198 10.661-2.321 4.385-.146 7.621-1.667 9.066-6.241.794-2.515 2.123-4.885 3.392-7.222 3.53-6.501 9.598-6.845 13.73-.678 1.56 2.327 2.818 4.934 3.773 7.572 1.62 4.482 4.511 6.524 9.331 6.703 3.262.121 6.617.904 9.7 2.024 6.97 2.53 8.081 8.233 2.89 13.606-1.273 1.316-2.618 2.562-4.197 4.08zM260.981 326.975c-2.615 1.927-3.714 3.796-2.86 7.019.747 2.816 1.475 5.807 1.028 8.872-.863 5.91-5.447 9.765-10.507 7.166-8.207-4.216-15.23-4.442-23.556.042-5.81 3.13-11.675-2.449-9.835-9.727 2.043-8.085-.376-12.983-6.998-16.872-1.112-.653-1.988-1.775-2.837-2.793-4.564-5.472-3.075-11.03 3.678-13.19 2.827-.903 5.812-1.535 8.767-1.773 4.335-.348 7.031-2.387 8.663-6.365a50.747 50.747 0 014.13-7.966c3.286-5.16 9.293-5.25 12.627-.053 1.96 3.056 3.4 6.483 4.781 9.863 1.244 3.044 3.36 4.44 6.516 4.427 3.718-.014 7.254.949 10.722 2.088 6.283 2.064 7.846 7.51 3.428 12.441-2.2 2.458-4.967 4.409-7.747 6.82zM282.273 241.874c-1.205 7.77-4.89 10.057-11.886 7.801-.633-.204-1.332-.322-1.872-.676-5.663-3.707-10.86-3.225-17.01-.133-8.555 4.302-13.477.267-12.69-9.31.095-1.155.263-2.324.575-3.437 1.13-4.028.007-6.986-3.593-9.32-2.342-1.519-4.463-3.499-6.349-5.575-5-5.502-3.309-11.71 3.766-13.794 3.004-.886 6.142-1.391 9.255-1.811 3.59-.484 6.16-1.83 7.348-5.61 1.04-3.31 2.435-6.558 4.76-9.265 3.735-4.347 8.955-4.151 12.103.655 1.445 2.206 2.801 4.626 3.479 7.143 1.348 5.007 4.655 6.737 9.436 7.133 2.942.243 5.905.928 8.724 1.834 6.525 2.098 8.196 8.098 3.61 13.26-2.075 2.337-4.533 4.499-7.2 6.105-3.81 2.296-4.5 5.225-3.321 9.177.515 1.729.593 3.588.865 5.823zM532.66 678c.005-11.996-.03-23.492.029-34.987.042-8.33 4.714-13.717 12.251-14.313 7.861-.623 13.128 3.532 14.742 11.701.289 1.459.471 2.965.475 4.45.044 16.493.137 32.987.02 49.48-.079 11.19-8.776 18.204-18.287 15.018-5.536-1.854-9.065-6.435-9.195-12.357-.136-6.161-.033-12.328-.035-18.992zM560.226 802.963c-.153 4.3.342 8.112-.745 11.9-1.84 6.41-7.371 10.668-13.626 10.189-7.026-.538-13.021-6.025-13.106-12.756-.197-15.646-.214-31.299.035-46.943.11-6.84 5.392-12.022 11.877-12.641 7.626-.728 12.824 2.963 14.751 10.393a26.76 26.76 0 01.852 6.902c-.048 10.82-.032 21.642-.038 32.956zM559.242 557.342c.35 4.38.943 8.35.873 12.307-.152 8.574-6.507 14.677-14.533 14.335-7.78-.333-12.88-6.12-12.92-14.672-.01-2.323-.007-4.647.015-6.97.076-8.138 3.773-12.694 11.61-14.329 5.993-1.25 11.81 2.23 14.955 9.329zM229.827 706.55c-5.033-3.232-7.565-7.646-7.625-13.126-.075-6.812.01-13.664.672-20.435.607-6.216 8.584-11.553 15.766-11.231 7.708.345 14.294 6.018 14.617 13.129.302 6.644.405 13.337-.042 19.966-.716 10.599-11.804 16.17-23.388 11.697z"
        opacity="1"
      ></path>
    </svg>
  )
}

export default BrindarIcon
