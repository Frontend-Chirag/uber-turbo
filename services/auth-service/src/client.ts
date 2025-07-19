
import { type AuthServiceServer, type AuthRequest, type AuthResponse, type GetAuthSessionRequest, FlowType, EventType, ScreenType, FieldType } from "@repo/proto";
import type { sendUnaryData, ServerUnaryCall } from "@grpc/grpc-js";


export const authHandlers: AuthServiceServer = {
    submitAuth(
        call: ServerUnaryCall<AuthRequest, AuthResponse>,
        callback: sendUnaryData<AuthResponse>
    ) {
        const { inAuthSessionId, nextUrl, screenAnswers } = call.request;
        const form = {
          nextUrl: '',
          inAuthSessionId: '',
         answers: screenAnswers.map((answers) => {
            answers.eventType
            answers.fieldAnswers.map((fields) => {
              fields.emailAddress
            }),
            answers.screenType
          })
        }

        callback(null, {
            success: true,
            message: 'Auth',
            data: {
              form: {
                flowType: FlowType.INITIAL,
                screens: {
                  eventType: EventType.TypeInputEmail,
                  screenType: ScreenType.EMAIL_ADDRESS_INITIAL,
                  fields: [
                    {
                      fieldType: FieldType.EMAIL_ADDRESS,

                    }
                  ]
                },
                inAuthSessionId: ''
              }
             }
        })

    },
    getAuthSession(
        call: ServerUnaryCall<GetAuthSessionRequest, AuthResponse>,
        callback: sendUnaryData<AuthResponse>
      ) {
        const { sessionId } = call.request;
    
        // TODO: Replace with real lookup logic
        callback(null, {
          success: true,
          message: `Session fetched for ID: ${sessionId}`,
          data: {},
        });
      },
}