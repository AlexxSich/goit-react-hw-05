import { DNA } from 'react-loader-spinner';

export default function LoadBar() {
  return (
    <span>
      <DNA
        visible={true}
        height="80"
        width="80"
        ariaLabel="dna-loading"
        wrapperStyle={{}}
        wrapperClass="dna-wrapper"
      />
    </span>
  );
}
