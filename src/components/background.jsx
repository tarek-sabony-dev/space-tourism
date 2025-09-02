export default function Background({ imageUrl, className = '' }){
  return(
    <>
      <div
        className={`fixed inset-0 w-full h-full bg-cover bg-center bg-no-repeat -z-10 ${className}`}
        style={{
          backgroundImage: `url(${imageUrl || ''})`
        }}
      />
    </>
  )
}