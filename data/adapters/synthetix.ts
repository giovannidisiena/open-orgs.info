import { OrganizationData } from '../types'
import { getPortfolio } from '../utils/zerion'

const synthetixDAO = '0xEb3107117FEAd7de89Cd14D463D340A2E6917769';
const grantsDAO = '0x86626E1BbBd0ce95ED52e0C5E19f371a6640B591';

export async function getSynthetixData(): Promise<OrganizationData> {
  const grantsDAOTreasury = await getPortfolio(grantsDAO)
  const snxDAOTreasury = await getPortfolio(synthetixDAO)

  return {
    id: 'synthetix',
    name: 'Synthetix',
    category: 'l1',
    treasury: grantsDAOTreasury + snxDAOTreasury,
  };
}
