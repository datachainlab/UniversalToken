const ERC1400HoldableCertificateToken = artifacts.require(
  './ERC1400HoldableCertificateToken.sol'
);

const CERTIFICATE_SIGNER = '0xfe3b557e8fb62b89f4916b721be55ceb828dbd73';
const controller = '0xca843569e3427144cead5e4d5999a3d0ccf92b8e';

const partition1 =
  '0x7265736572766564000000000000000000000000000000000000000000000000'; // reserved in hex
const partition2 =
  '0x6973737565640000000000000000000000000000000000000000000000000000'; // issued in hex
const partition3 =
  '0x6c6f636b65640000000000000000000000000000000000000000000000000000'; // locked in hex
const partitions = [partition1, partition2, partition3];

const ZERO_ADDRESS = '0x0000000000000000000000000000000000000000';

const CERTIFICATE_VALIDATION_NONE = 0;
const CERTIFICATE_VALIDATION_NONCE = 1;
const CERTIFICATE_VALIDATION_SALT = 2;

module.exports = async function (deployer, network, accounts) {
  if (network == 'test') return; // test maintains own contracts

  await deployer.deploy(
    ERC1400HoldableCertificateToken,
    'ERC1400HoldableCertificateToken',
    'DAU',
    1,
    [controller],
    partitions,
    ZERO_ADDRESS,
    ZERO_ADDRESS,
    CERTIFICATE_SIGNER,
    CERTIFICATE_VALIDATION_NONE
  );
  console.log(
    '\n   > ERC1400HoldableCertificateToken token deployment without extension: Success -->',
    ERC1400HoldableCertificateToken.address
  );
};
