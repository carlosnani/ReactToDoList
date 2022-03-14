import Card from '../Card'

export default function Board({children}) {
  return (
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-md-8">
         {children}
        </div>
      </div>
    </div>
  );
}
