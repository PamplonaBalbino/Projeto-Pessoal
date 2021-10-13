import { Box,Flex,} from "@chakra-ui/layout";
import { Button } from "@chakra-ui/button";
export default function AreaGuides () {
    return(
    <Box>
            <Flex 
            flex={{ base: 1 }} 
            justify={{ base: 'center', md: 'start' }}
            margin="1em"
            borderRadius="5px"
            as={'a'}
            fontSize={'sm'}
            fontWeight={400}
            color={('Green.200')}
            href={'#'}
            width={'20em'}
            height={'15em'}
            bgColor="red">
            GUIA 1
            </Flex>
    </Box>
    )
}