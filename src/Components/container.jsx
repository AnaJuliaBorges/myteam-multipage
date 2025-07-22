
export const Container = ({children, style}) => {
  return (
    <div className={`px-6 md:px-24 lg:px-0 max-w-[1110px] py-32 ${style}`}>{children}</div>
  )
}
