import { InferType, object, string } from "yup"

const schema = object({
  ROOT_EMAIL: string().email().required(),
  ROOT_PASSWORD: string().required(),
})

export function env(data: unknown): InferType<typeof schema> {
  return schema.validateSync(data)
}
