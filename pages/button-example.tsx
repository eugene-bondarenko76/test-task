import Button from '../components/Button';


const ButtonExample = () => {

  return <div className="h-screen flex-1">
    <div className="w-1/2 flex justify-between m-auto items-center mt-6">
      <Button text="Nice button" variant="default" color="blue" size="small" icon='/test-icon.svg'/>

      <Button text="Nice button" variant="default" color="blue" size="regular"/>

      <Button text="Nice button" variant="default" color="blue" size="large"/>
    </div>

    <div className="w-1/2 flex justify-between m-auto items-center mt-6">
      <Button text="Nice button" variant="outline" color="blue" size="small"/>

      <Button text="Nice button" variant="outline" color="blue" size="regular"  />

      <Button text="Nice button" variant="outline" color="blue" size="large"/>
    </div>

    <div className="w-1/2 flex justify-between m-auto items-center mt-6">
      <Button text="Nice button" variant="default" color="red" size="small"/>

      <Button text="Nice button" variant="default" color="red" size="regular"/>

      <Button text="Nice button" variant="default" color="red" size="large"  icon='/test-icon.svg'/>
    </div>

    <div className="w-1/2 flex justify-between m-auto items-center mt-6">
      <Button text="Nice button" variant="outline" color="red" size="small"/>

      <Button text="Nice button" variant="outline" color="red" size="regular"/>

      <Button text="Nice button" variant="outline" color="red" size="large"/>
    </div>
  </div>

}

export default ButtonExample;
