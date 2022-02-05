import React from 'react'
import { useGlobalContext } from '../context'

/* ChakraUI */
import { Stack, Switch } from '@chakra-ui/react'

function SwitchReverseCard() {
  const { isRev, setIsRev } = useGlobalContext()

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: '1rem'
      }}
    >
      <h1 className="subtitle">Inversões?</h1>
      <Stack direction="row">
        <Switch
          colorScheme="purple"
          size="md"
          isChecked={isRev}
          onChange={e => {
            setIsRev(!isRev, e.target.isRev)
          }}
        />
      </Stack>
    </div>
  )
}

export default SwitchReverseCard
