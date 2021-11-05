import { Entity, Point, State } from '../types'

function removeEntities ({ entities, names }: {
  entities: Entity[]
  names?: string[]
}): Entity[] {
  if (names == null) {
    return entities
  }

  const filtered = entities.filter(entity => {
    const match = names.includes(entity.name)

    return !match
  })

  return filtered
}

function mergeEntities ({ a, b }: {
  a: Entity[]
  b?: Entity[]
}): Entity[] {
  if (b == null) {
    return a
  }

  const updated = a.map(entityA => {
    const match = b.find(entityB => entityB.name === entityA.name)

    if (match == null) {
      return entityA
    }

    return match
  })

  const filtered = b.filter(entityB => {
    const found = updated.find(enityA => enityA.name === entityB.name)
    const unfound = found == null

    return unfound
  })

  const merged = [...updated, ...filtered]

  return merged
}

function loadEntities ({ entities, point }: {
  entities: Entity[]
  point: Point
}): Entity[] {
  const removed = removeEntities({ entities, names: point.remove })

  const merged = mergeEntities({ a: removed, b: point.add })

  return merged
}

export default function loadPoint ({ state, point }: {
  state: State
  point: Point
}): State {
  const entities = loadEntities({ entities: state.entities, point })

  const loaded = {
    ...state, entities, component: point.component, value: point.value
  }

  return loaded
}
